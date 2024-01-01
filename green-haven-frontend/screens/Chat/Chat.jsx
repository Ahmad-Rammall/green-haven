import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import UserChat from "../../components/UserChat/UserChat";
import { COLORS, SIZES } from "../../assets/constants";

const Chat = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({});
