import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.offwhite,
    flex: 1,
  },
  wrapper: {
    margin: SIZES.large,
    marginBottom: 10,
  },
  emptyOrders: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyOrdersText: {
    fontFamily: "light",
    fontSize: 20,
    color: COLORS.gray2,
  },
});

export default styles;
