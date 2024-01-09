import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal } from "react-native";
import styles from "./locationModal.styles";

const LocationModal = ({ isModalVisible, toggleModal }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputSubmit = () => {
    console.log("Submitted Text:", inputValue);
  };
  return (
    <>
      {isModalVisible && (
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text>Enter Location:</Text>
            <TextInput
              style={styles.text}
              onChangeText={(text) => setInputValue(text)}
              value={inputValue}
            />
            <View style={styles.buttons}>
              <Button title="Cancel" onPress={toggleModal}/>
              <Button title="OK" onPress={handleInputSubmit} />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export default LocationModal;
