import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./gardenItem.styles";

const GardenItem = ({ imageSource }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

export default GardenItem;
