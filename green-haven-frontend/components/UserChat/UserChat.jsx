import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./userChat.styles";

const UserChat = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require("../../assets/images/noUserImage.png")}
        style={styles.image}
      />
      <View style={styles.rightContainer}>
        <View style={styles.topContainer}>
          <Text style={styles.userName}>UserChat</Text>
          <Text style={styles.time}>11:45</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.lastMsg}>last message</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserChat;
