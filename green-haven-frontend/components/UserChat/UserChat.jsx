import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./userChat.styles";
import {useSelector} from "react-redux";
import flatted from "flatted";
import { STREAM_KEY } from "@env";
import { StreamChat } from "stream-chat";
import {useNavigation} from "@react-navigation/native";

const UserChat = ({ user }) => {
  // get client instance
  const client = StreamChat.getInstance(process.env.STREAM_KEY);

  const navigation = useNavigation();

  // current loggedin user
  const currentUser = useSelector((state) => state.User);

  const createNewChannel = async () => {
    if (user._id !== currentUser._id) {
      const channel = client.channel("messaging", {
        members: [user._id.toString(), currentUser._id.toString()],
      });
      await channel.watch();
      navigation.navigate('Chat', {channelId: channel.id})
    } else {
      console.log("Error: user._id and currentUser._id are the same.");
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={() => createNewChannel()}>
      <Image
        source={require("../../assets/images/noUserImage.png")}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.userName}>{user.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserChat;
