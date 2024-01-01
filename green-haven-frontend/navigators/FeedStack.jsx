import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Feed, FeedProfile, Chat, Conversation } from "../screens";
import { COLORS } from "../assets/constants";

const FeedStack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
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
const FeedStackNavigator = () => {
  return (
    <FeedStack.Navigator screenOptions={screenOptions}>
      <FeedStack.Screen name="Feed" component={Feed} />
      <FeedStack.Screen name="User Profile" component={FeedProfile} />
      <FeedStack.Screen name="Chat" component={Chat} />
      <FeedStack.Screen name="Conversation" component={Conversation} />
    </FeedStack.Navigator>
  );
};

export default FeedStackNavigator;
