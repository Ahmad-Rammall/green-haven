import { TouchableOpacity, Text, View } from "react-native";
import React, { useState } from "react";
import Garden from "../Garden/Garden";
import ChatBot from "../ChatBot/ChatBot";
import styles from "./home.styles";

const Home = () => {
  const [gardenScreen, setGardenScreen] = useState(true);
  const [messages, setMessages] = useState([{
    _id:1,
    text: "Hello, how can I help you ?",
    createdAt: new Date(),
    user: {
      _id: 1,
      name: "ChatBot",
    },
  },]);
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={
            gardenScreen ? styles.button : [styles.button, styles.disabled]
          }
          onPress={() => setGardenScreen(true)}
        >
          <Text style={styles.buttonText}>Garden</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            !gardenScreen ? styles.button : [styles.button, styles.disabled]
          }
          onPress={() => setGardenScreen(false)}
        >
          <Text style={styles.buttonText}>ChatBot</Text>
        </TouchableOpacity>
      </View>

      {gardenScreen ? <Garden /> : <ChatBot messages={messages} setMessages={setMessages}/>}
    </View>
  );
};

export default Home;
