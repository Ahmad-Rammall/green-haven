import { Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./userChat.styles";

const UserChat = ({ user }) => {
  return (
    <TouchableOpacity style={styles.container}>
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
