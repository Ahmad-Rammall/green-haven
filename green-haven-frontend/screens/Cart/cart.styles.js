import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.offwhite,
  },
  wrapper: {
    margin: SIZES.large,
  },

  // Bottom Container Styles

  bottomContainer:{
    backgroundColor: COLORS.secondary,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: SIZES.xSmall,
    borderTopRightRadius: SIZES.xSmall,
    paddingHorizontal: SIZES.large
  },
  totalAmountContainer:{
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center"
  },

  totalAmount:{
    paddingVertical: SIZES.medium,
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  }
});

export default styles;
