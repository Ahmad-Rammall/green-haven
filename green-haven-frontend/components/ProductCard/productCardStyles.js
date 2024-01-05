import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 195,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginBottom: SIZES.large,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    borderRadius: SIZES.small,
  },
  topDetailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  details: {
    paddingHorizontal: 5,
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
