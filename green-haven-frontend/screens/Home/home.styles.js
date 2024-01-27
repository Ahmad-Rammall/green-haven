import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
    height: SIZES.height
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: SIZES.large,
    justifyContent: "center",
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
  },
  buttonText:{
    color: COLORS.offwhite,
    fontFamily: "semibold",
  },
  disabled:{
    backgroundColor: COLORS.gray2,
  }
});

export default styles;
