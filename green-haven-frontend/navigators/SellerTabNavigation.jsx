import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/constants/index";
import MarketStackNavigator from "./MarketStack";
import ProfileStackNavigator from "./ProfileStack";
import FeedStackNavigator from "./FeedStack";
import { Order } from "../screens";
import { useRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

// Options For Bottom Navigator Screens
const bottomTabScreenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
};

const ordersScreenOptions = () => ({
  headerShown: true,
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  headerTintColor: COLORS.offwhite,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "light",
  },
  headerTitle: "Orders",
  headerBackTitleVisible: true,

  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name={focused ? "list-sharp" : "list-outline"}
        size={27}
        color={focused ? COLORS.primary : COLORS.gray2}
      />
    );
  },
});

// Bottom navigator sections
const BottomTabNavigation = () => {
  const route = useRoute();
  return (
    <Tab.Navigator
      screenOptions={bottomTabScreenOptions}
      initialRouteName="MarketPage"
    >
      <Tab.Screen
        name="OrdersPage"
        component={Order}
        options={ordersScreenOptions}
      />
      <Tab.Screen
        name="MarketPage"
        component={MarketStackNavigator}
        options={() => ({
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "basket" : "basket-outline"}
                size={27}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        })}
      />

      <Tab.Screen
        name="FeedPage"
        component={FeedStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "people" : "people-outline"}
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfilePage"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={27}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
