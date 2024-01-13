import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/constants/index";
import { Garden } from "../screens";
import MarketStackNavigator from "./MarketStack";
import ScannerStackNavigator from "./ScannerStack";
import ProfileStackNavigator from "./ProfileStack";
import FeedStackNavigator from "./FeedStack";

const Tab = createBottomTabNavigator();

// Options For Bottom Navigator Screens
const bottomTabScreenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
};

const gardenScreenOptions = ({ route }) => ({
  headerShown: true,
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  headerTintColor: COLORS.offwhite,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "light",
  },
  headerTitle:"Garden",
  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name={focused ? "ios-basket" : "ios-basket-outline"}
        size={27}
        color={focused ? COLORS.primary : COLORS.gray2}
      />
    );
  }
});

// Bottom navigator sections
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={bottomTabScreenOptions}
      initialRouteName="GardenPage"
    >
      <Tab.Screen
        name="MarketPage"
        component={MarketStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "ios-basket" : "ios-basket-outline"}
                size={27}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="ScannerPage"
        component={ScannerStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "scan-circle" : "scan-circle-outline"}
                size={30}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="GardenPage"
        component={Garden}
        options={gardenScreenOptions}
      />
      <Tab.Screen
        name="FeedPage"
        component={FeedStackNavigator}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "md-people" : "md-people-outline"}
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
