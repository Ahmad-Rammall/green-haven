import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { GardenItem, BottomSheet } from "../../components";
import styles from "./garden.styles";
import { gardenDataSource } from "../../core/dataSource/remoteDataSource/garden";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Garden = () => {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});
  const bottomSheetModalRef = useRef(null);
  const [modalStyle, setModalStyle] = useState(styles.modalClose);
  const [modalOpen, setModalOpen] = useState(false);
  const snapPoints = ["40%"];

  const getPlants = async () => {
    const response = await gardenDataSource.getAllPlants();
    if (response?.status === 200) {
      setPlants(response.data.garden);
    }
  };

  const handleOpenModal = () => {
    bottomSheetModalRef.current?.present();
    setModalOpen(true);
    setModalStyle(styles.modalOpen);
  };

  useEffect(() => {
    getPlants();
  }, []);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.wrapper}>
          {plants.map((plant) => (
            <GardenItem
              key={plant._id}
              plant={plant}
              handleOpenModal={handleOpenModal}
              setSelectedPlant={setSelectedPlant}
            />
          ))}
        </View>
      </ScrollView>

      <GestureHandlerRootView style={modalStyle}>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={0}
            snapPoints={snapPoints}
            onDismiss={() => {
              setModalOpen(false);
              setModalStyle(styles.modalClose);
            }}
          >
            <BottomSheet plant={selectedPlant} garden />
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default Garden;
