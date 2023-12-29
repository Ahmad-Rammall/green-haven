import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  image: {
    height: SIZES.height / 3,
    width: SIZES.width,
    resizeMode: "contain",
    marginBottom: SIZES.xLarge,
  },
});

export default styles;
