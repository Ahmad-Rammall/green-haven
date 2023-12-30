import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { Market, ProductDetails, Cart } from "../screens";
import { COLORS } from "../assets/constants";
import { StyleSheet } from "react-native";

const MarketStack = createNativeStackNavigator();

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
          navigation.navigate("Cart");
        }}
      >
        <Ionicons name="ios-cart-outline" size={24} color={COLORS.offwhite} />
      </TouchableOpacity>
    </View>
  ),
});

// Navigations inside the market section
const MarketStackNavigator = () => {
  return (
    <MarketStack.Navigator screenOptions={screenOptions}>
      <MarketStack.Screen name="Market" component={Market} />
      <MarketStack.Screen name="Product Details" component={ProductDetails} />
      <MarketStack.Screen
        name="Cart"
        component={Cart}
        options={{ headerRight: () => <View></View> }}
      />
    </MarketStack.Navigator>
  );
};

export default MarketStackNavigator;

const styles = StyleSheet.create({
  headerButtonsContainer: {
    flexDirection: "row",
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
