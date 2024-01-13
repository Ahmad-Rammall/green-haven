import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: SIZES.medium,
  },
  modalClose: {
    display: "none",
  },
  modalOpen: {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: SIZES.width,
    height: 1100,
    zIndex: 9999,
  },
});

export default styles;
