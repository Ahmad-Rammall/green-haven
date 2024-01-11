import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    padding: 15,
  },
  orderId: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },

  detailContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    width: 100,
    fontFamily: "light",
  },
  detail: {
    fontFamily: "regular",
  },
  line: {
    borderTopWidth: 1,
    marginTop: 10,
    borderStyle: "dashed",
  },
});

export default styles;
