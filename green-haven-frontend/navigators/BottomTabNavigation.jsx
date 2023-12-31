import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/constants/index";
import { Feed, Garden, Profile } from "../screens";
import MarketStackNavigator from "./MarketStack";
import ScannerStackNavigator from "./ScannerStack";
import ProfileStackNavigator from "./ProfileStack";

const Tab = createBottomTabNavigator();

// Options For Bottom Navigator Screens
const bottomTabScreenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
};

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
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={27}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FeedPage"
        component={Feed}
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
