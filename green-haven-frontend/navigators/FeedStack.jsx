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
import { useSelector } from "react-redux";

const FeedStack = createNativeStackNavigator();

const client = StreamChat.getInstance(STREAM_KEY);

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
const FeedStackNavigator = ({ navigation }) => {
  const currentUser = useSelector((state) => state.User);
  useEffect(() => {
    const connectUser = async () => {
      await client.connectUser(
        {
          id: currentUser._id.toString(),
          name: currentUser.username,
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        currentUser.streamToken
      );

      const channel = client.channel("livestream", "public", {
        name: "Public",
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
                headerRight: () => (
                  <View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Conversation");
                      }}
                    >
                      <Feather name="edit" size={24} color={COLORS.offwhite} />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />
            <FeedStack.Screen name="Conversation" component={Conversation} options={{headerRight: undefined}}/>
          </FeedStack.Navigator>
        </Chat>
      </OverlayProvider>
    </GestureHandlerRootView>
  );
};

export default FeedStackNavigator;
