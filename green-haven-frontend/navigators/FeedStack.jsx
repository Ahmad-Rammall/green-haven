import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons, Feather } from "@expo/vector-icons";
import { Feed, FeedProfile, Chat as ChatPage, Conversation } from "../screens";
import { COLORS } from "../assets/constants";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { StreamChat } from "stream-chat";
import { STREAM_KEY } from "@env";
import { useEffect } from "react";
import { OverlayProvider, Chat } from "stream-chat-expo";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useSelector, useDispatch } from "react-redux";
import { loggedInClient } from "../core/dataSource/localDataSource/client";
import flatted from "flatted";
import { PUBLIC_FOLDER } from "@env";

const FeedStack = createNativeStackNavigator();

const client = StreamChat.getInstance(process.env.STREAM_KEY);

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
          name="chatbubbles-outline"
          size={24}
          color={COLORS.offwhite}
        />
      </TouchableOpacity>
    </View>
  ),
});

// Navigations inside the market section
const FeedStackNavigator = ({ navigation }) => {
  const currentUser = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const userProfilePicture = `${process.env.PUBLIC_FOLDER}profile-pics/${currentUser.profilePicture}`;
  const publicChannelImg = `${process.env.PUBLIC_FOLDER}public-channel.jpg`;

  dispatch(
    loggedInClient({
      client: flatted.stringify(client),
    })
  );
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: currentUser._id.toString(),
          name: currentUser.username,
          image: userProfilePicture,
        },
        currentUser.streamToken
      );

      const channel = client.channel("livestream", "public", {
        name: "Public",
        image: publicChannelImg,
      });

      await channel.create();
    };
    connectUser();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <OverlayProvider>
        <Chat client={client}>
          <FeedStack.Navigator screenOptions={screenOptions}>
            <FeedStack.Screen name="Feed" component={Feed} />
            <FeedStack.Screen name="User Profile" component={FeedProfile} />
            <FeedStack.Screen
              name="Chat"
              component={ChatPage}
              options={{
                headerRight: undefined,
              }}
            />
            <FeedStack.Screen
              name="Conversation"
              component={Conversation}
              options={{ headerRight: undefined }}
            />
          </FeedStack.Navigator>
        </Chat>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

export default FeedStackNavigator;
