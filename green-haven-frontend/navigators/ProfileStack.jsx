import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { ChangePassword, EditProfile, LikedPosts, Profile } from "../screens";
import { COLORS } from "../assets/constants";

const ProfileStack = createNativeStackNavigator();

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
const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={screenOptions}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="Edit Profile" component={EditProfile} />
      <ProfileStack.Screen name="Change Password" component={ChangePassword} />
      <ProfileStack.Screen name="Liked Posts" component={LikedPosts} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
