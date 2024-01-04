import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    height: 80,
    borderRadius: SIZES.xSmall,
    flexDirection: "row",
    marginBottom: SIZES.small,
  },
  leftContainer: {},
  image: {
    height: "100%",
    width: 80,
    resizeMode: "cover",
    borderRadius: SIZES.small,
  },
  rightContainer: {
    flex: 1,
    margin: SIZES.xSmall,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: (family, size) => ({
    fontFamily: family,
    fontSize: size,
  }),
  buttons: {
    flexDirection: "row",
    gap: 20,
  },
  quantity: {
    flexDirection: "row",
    borderRadius: SIZES.xSmall,
    justifyContent: "space-between",
    gap: 5,
  },
  quantityBtn: {
    color: COLORS.primary,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
    fontFamily: "regular",
  },
  deleteBtn: {
    backgroundColor: COLORS.red,
    color: COLORS.offwhite,
    borderRadius: SIZES.xSmall,
    padding: 5,
    textAlign: "center",
  },
});

export default styles;
