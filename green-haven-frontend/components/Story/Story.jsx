import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./story.styles";

const Story = ({ image, mine, userName }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        {mine && (
          <Text style={styles.plus}>
            <Ionicons name="add" size={16} />
          </Text>
        )}
      </View>
      <Text style={styles.userName}>{mine ? "My Story" : userName}</Text>
    </View>
  );
};

export default Story;


