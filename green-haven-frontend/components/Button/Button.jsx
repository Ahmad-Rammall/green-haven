import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../assets/constants";

const Button = ({ btnText = "Button", isValid, onPress, color }) => {
  color = color ? color : COLORS.primary
  return (
    <TouchableOpacity
      style={styles.button(isValid ? color : COLORS.gray2)}
      onPress={onPress}
      disabled={!isValid}
    >
      <Text style={styles.text}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: (color) => ({
    backgroundColor: color,
    padding: 5,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.small
  }),
  text: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "bold",
    fontSize: SIZES.medium
  },
});
