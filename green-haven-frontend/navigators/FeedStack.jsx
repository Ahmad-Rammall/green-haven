import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { Feed, FeedProfile, Chat, Conversation } from "../screens";
import { COLORS } from "../assets/constants";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import {StreamChat} from 'stream-chat'
import {STREAM_KEY} from "@env"
import { useEffect } from "react";

const FeedStack = createNativeStackNavigator();

const client = StreamChat.getInstance(STREAM_KEY)



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
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        <Ionicons
          name="ios-chatbubbles-outline"
          size={24}
          color={COLORS.offwhite}
        />
      </TouchableOpacity>
    </View>
  ),
});


// Navigations inside the market section
const FeedStackNavigator = () => {
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: 'testUser',
          name: 'Test User',
          image: 'https://i.imgur.com/fR9Jz14.png',
        },
        client.devToken('testUser'),
      );
    }
    connectUser();
  }, [])
  return (
    <FeedStack.Navigator screenOptions={screenOptions}>
      <FeedStack.Screen name="Feed" component={Feed} />
      <FeedStack.Screen name="User Profile" component={FeedProfile} />
      <FeedStack.Screen
        name="Chat"
        component={Chat}
        options={{ headerRight: () => <View /> }}
      />
      <FeedStack.Screen name="Conversation" component={Conversation} />
    </FeedStack.Navigator>
  );
};

export default FeedStackNavigator;
