import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: SIZES.width / 2.4,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginBottom: SIZES.large,
    justifyContent: "space-between"
  },
  image: {
    resizeMode: "cover",
    borderRadius: SIZES.small,
    aspectRatio:1
  },
  details: {
    paddingHorizontal: 10,
    paddingTop: 5
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
