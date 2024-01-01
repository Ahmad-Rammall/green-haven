import { ScrollView, View } from "react-native";
import React from "react";
import UserChat from "../../components/UserChat/UserChat";
import styles from "./chat.styles";

const Chat = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
        <UserChat />
      </ScrollView>
    </View>
  );
};

export default Chat;


