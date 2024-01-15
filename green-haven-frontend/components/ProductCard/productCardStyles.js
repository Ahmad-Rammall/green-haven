import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: 170,
    height: 225,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginBottom: SIZES.large,
  },
  image: {
    resizeMode: "contain",
    borderRadius: SIZES.small,
    height: 170,
  },
  details: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: "light",
    fontSize: 14,
  },
  price: {
    fontFamily: "semibold",
    fontSize: SIZES.medium,
    marginBottom: -5,
    marginTop: 3
  },
});

export default styles;
