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
    backgroundColor: COLORS.gray2,
    height: 150,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: SIZES.xSmall,
    borderTopRightRadius: SIZES.xSmall,
  },

  totalAmount:{
    padding: SIZES.medium,
    fontFamily: "bold",
    fontSize: SIZES.large,
  }
});

export default styles;
