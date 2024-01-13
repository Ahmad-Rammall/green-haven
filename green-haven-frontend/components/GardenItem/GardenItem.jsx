import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./gardenItem.styles";
import {PUBLIC_FOLDER} from "@env"

const GardenItem = ({ plant }) => {
  console.log(PUBLIC_FOLDER)
  const image = PUBLIC_FOLDER + "garden-pics/"+ plant.plant_picture
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri:image }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default GardenItem;
