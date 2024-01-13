import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { GardenItem } from "../../components";
import styles from "./garden.styles";

const Garden = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.wrapper}>
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />
        <GardenItem imageSource={require("../../assets/images/plant5.jpg")} />

      </View>
    </ScrollView>
  );
};

export default Garden;
