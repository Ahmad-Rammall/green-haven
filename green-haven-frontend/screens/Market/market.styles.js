import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
  },
  wrapper: {
    margin: SIZES.large,
  },
  productsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 20,
  },

  addBtn: {
    backgroundColor: COLORS.primary,
    position: "absolute",
    bottom: 0,
    right: 0,
    margin: SIZES.large,
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnText: {
    color: COLORS.offwhite,
    fontSize: 30,
  },
});

export default styles;
