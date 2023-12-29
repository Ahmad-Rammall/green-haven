import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../assets/constants";

const Button = ({ btnText = "Button", isValid, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button(isValid ? COLORS.primary : COLORS.gray)}
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
    margin: SIZES.medium,
    padding: 5,
    borderRadius: SIZES.medium,
  }),
  text: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "bold",
    fontSize: SIZES.medium
  },
});
