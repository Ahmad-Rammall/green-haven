import { TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Garden from "../Garden/Garden";
import styles from "./home.styles";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Garden</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.disabled]}>
          <Text style={styles.buttonText}>ChatBot</Text>
        </TouchableOpacity>
      </View>

      <Garden />
    </View>
  );
};

export default Home;
