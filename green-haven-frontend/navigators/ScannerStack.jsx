import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Scanner } from "../screens";
import { COLORS } from "../assets/constants";

const ScannerStack = createNativeStackNavigator();

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
});

// Navigations inside the market section
const ScannerStackNavigator = () => {
  return (
    <ScannerStack.Navigator screenOptions={screenOptions}>
      <ScannerStack.Screen name="Scanner" component={Scanner} />
    </ScannerStack.Navigator>
  );
};

export default ScannerStackNavigator;
