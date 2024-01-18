import { TouchableOpacity, Text, View } from "react-native";
import React, { useState } from "react";
import Garden from "../Garden/Garden";
import ChatBot from "../ChatBot/ChatBot";
import styles from "./home.styles";

const Home = () => {
  const [gardenScreen, setGardenScreen] = useState(true);
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

      {gardenScreen ? <Garden /> : <ChatBot />}
    </View>
  );
};

export default Home;
