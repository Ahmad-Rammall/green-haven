import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { GardenItem } from "../../components";
import styles from "./garden.styles";
import { gardenDataSource } from "../../core/dataSource/remoteDataSource/garden";

const Garden = () => {
  const [plants, setPlants] = useState([]);

  const getPlants = async () => {
    const response = await gardenDataSource.getAllPlants();
    if (response?.status === 200) {
      setPlants(response.data.garden);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.wrapper}>
        {plants.map((plant) => (
          <GardenItem key={plant._id} plant={plant} />
        ))}
      </View>
    </ScrollView>
  );
};

export default Garden;
