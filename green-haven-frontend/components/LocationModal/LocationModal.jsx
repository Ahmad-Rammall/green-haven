import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import styles from "../DeleteModal/modal.styles";
import { COLORS } from "../../assets/constants";

const LocationModal = ({
  isModalVisible,
  toggleModal,
  setLocation,
  sendOrders,
  location,
}) => {
  return (
    <>
      <Modal
        transparent={true}
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enter Location:</Text>
            <TextInput
              style={styles.text}
              onChangeText={(text) => setLocation(text)}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={toggleModal}
                style={[styles.button, styles.cancelButton]}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={sendOrders}
                style={
                  location !== ""
                    ? [styles.button, styles.actionButton(COLORS.primary)]
                    : [styles.button, styles.actionButton(COLORS.gray2)]
                }
                disabled={location === ""}
              >
                <Text style={styles.buttonText}>Order</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LocationModal;
