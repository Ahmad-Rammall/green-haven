import React from "react";
import { Image, TouchableOpacity } from "react-native";
import styles from "./gardenItem.styles";
import { PUBLIC_FOLDER } from "@env";

const GardenItem = ({ plant, setSelectedPlant, handleOpenModal }) => {
  const image = PUBLIC_FOLDER + "garden-pics/" + plant.plant_picture;

  const onPlantPress = () => {
    setSelectedPlant(plant)
    handleOpenModal();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPlantPress()}>
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default GardenItem;
