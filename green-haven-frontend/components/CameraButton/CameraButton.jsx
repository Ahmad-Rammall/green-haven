import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";

export default function CameraButton({ shutter, onPress, icon, color }) {
  return (
    <>
      {shutter ? (
        <View style={styles.back}>
          <TouchableOpacity onPress={onPress} style={styles.button} />
        </View>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Entypo name={icon} size={28} color={color ? color : "#f1f1f1"} />
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  back: {
    alignSelf: "center",
    height: 70,
    width: 70,
    borderWidth: 5,
    borderColor: COLORS.offwhite,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    height: 50,
    backgroundColor: COLORS.offwhite,
    borderRadius: 50,
    width: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#f1f1f1",
    marginLeft: 10,
  },
});
