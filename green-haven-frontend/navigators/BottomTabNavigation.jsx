import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../assets/constants/index";
import {
  Feed,
  Garden,
  Market,
  Profile,
  Scanner,
  ProductDetails,
  Cart,
} from "../screens";

const Tab = createBottomTabNavigator();
const MarketStack = createNativeStackNavigator();

// Options For Nested Screens
const screenOptions = ({ route, navigation }) => ({
  headerShown: true,
  headerStyle: {
    backgroundColor: COLORS.primary,
  },
  headerTintColor: COLORS.offwhite,
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "light",
  },
  headerTitle: route.name,
  headerBackTitleVisible: true,
  headerBackImage: ({ tintColor }) => (
    <Ionicons name="ios-arrow-back" size={24} color={tintColor} />
  ),
  // Cart Icon On The Right
  headerRight: () => (
    <View style={styles.headerButtonsContainer}>
      <TouchableOpacity
        style={styles.headerButton}
        onPress={() => {
          navigation.navigate("Cart")
        }}
      >
        <Ionicons name="ios-cart-outline" size={24} color={COLORS.offwhite}/>
      </TouchableOpacity>
    </View>
  ),
  
});

// Options For Bottom Navigator Screens
const bottomTabScreenOptions ={
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
};

// Navigations inside the market section
const MarketStackNavigator = () => {
  return (
    <MarketStack.Navigator screenOptions={screenOptions}>
      <MarketStack.Screen name="Market" component={Market} />
      <MarketStack.Screen
        name="Product Details"
        component={ProductDetails}
      />
      <MarketStack.Screen name="Cart" component={Cart} options={{ headerRight:()=>(<View></View>) }}/>
    </MarketStack.Navigator>
  );
};

// Bottom navigator sections
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={bottomTabScreenOptions}
      initialRouteName="Garden"
    >
      <Tab.Screen
        name="MarketSection"
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
        name="Scanner"
        component={Scanner}
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
        name="Garden"
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
        name="Feed"
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
        name="Profile"
        component={Profile}
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

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: 'row',
    marginRight: 10,
  },
  headerButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.offwhite,
  },
});

export default BottomTabNavigation;
