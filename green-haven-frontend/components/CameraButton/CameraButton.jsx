import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";

export default function CameraButton({ shutter, onPress, icon, title, flash, color }) {
  return (
    <>
      {shutter ? (
        <View style={styles.back}>
          <TouchableOpacity onPress={onPress} style={styles.button} />
        </View>
      ) : flash ? (
        <TouchableOpacity onPress={onPress}>
          <Entypo name={icon} size={28} color={color} />
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onPress} style={styles.button}>
          <Entypo name={icon} size={28} color={COLORS.gray} />
          <Text style={styles.text}>{title}</Text>
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
    flexDirection: "row",
    height: 50,
    backgroundColor: COLORS.offwhite,
    borderRadius: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 7,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#E9730F",
    marginLeft: 10,
  },
});
