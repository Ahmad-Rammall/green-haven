import { Text, View, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import { GardenItem, BottomSheet } from "../../components";
import styles from "./garden.styles";
import { gardenDataSource } from "../../core/dataSource/remoteDataSource/garden";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Garden = () => {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState({});
  const bottomSheetModalRef = useRef(null);
  const [modalStyle, setModalStyle] = useState(styles.modalClose);
  const [modalOpen, setModalOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const snapPoints = ["70%"];

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

  const handleRefresh = async () => {
    setRefresh(true);
    try {
      await getPlants();
    } finally {
      setRefresh(false);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);
  return (
    <View style={styles.container}>
      {plants.length !== 0 ? (
        <View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
            }
          >
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
        </View>
      ) : (
        <View style={styles.noPlants}>
          <ScrollView
            style={styles.scrollViewContainer}
            contentContainerStyle={styles.scrollViewContent}
            refreshControl={
              <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
            }
          >
            <Text style={styles.noPlantsText}>No Saved Plants</Text>
          </ScrollView>
        </View>
      )}

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
    </View>
  );
};

export default Garden;
