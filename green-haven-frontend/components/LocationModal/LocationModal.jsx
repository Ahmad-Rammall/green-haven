import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal } from "react-native";
import styles from "./locationModal.styles";

const LocationModal = ({ isModalVisible, toggleModal, setLocation, sendOrders }) => {
  return (
    <>
      {isModalVisible && (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text>Enter Location:</Text>
            <TextInput
              style={styles.text}
              onChangeText={(text) => setLocation(text)}
            />
            <View style={styles.buttons}>
              <Button title="Cancel" onPress={toggleModal}/>
              <Button title="OK"  onPress={sendOrders}/>
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default LocationModal;
