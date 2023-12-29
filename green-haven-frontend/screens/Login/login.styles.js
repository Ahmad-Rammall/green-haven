import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: COLORS.offwhite,
    flex: 1,
  },
  image: {
    height: SIZES.height / 3,
    width: SIZES.width,
    resizeMode: "contain",
    marginBottom: SIZES.xLarge,
  },
  inputs: {
    marginBottom: SIZES.large,
    marginHorizontal: SIZES.large,
  },
  label: {
    fontFamily: "regular",
    marginBottom: 5,
    marginEnd: 5,
    fontSize: SIZES.xSmall,
  },
  inputWrapper: (borderColor) => ({
    borderColor: borderColor,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
  }),
  input: {
    flex: 1,
    marginLeft: SIZES.medium,
  },
  errorMsg: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },

  // Register Option
  registerText: {
    textAlign: "center",
    fontFamily: "light",
    fontSize: SIZES.small,
    marginBottom: 10,
    color: COLORS.gray,
  },
  registerBtn: {
    color: COLORS.primary,
    textDecorationLine: "underline",
  },

  // Other Sign In Options
  otherOptionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.medium,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray2,
    marginHorizontal: SIZES.large,
  },
  text: {
    fontSize: SIZES.small,
    color: COLORS.gray2,
    marginHorizontal: -10,
  },

  // Options (GOOGLE / FACEBOOK)
  optionsContainer: {
    marginTop: 5,
  },
  option: (bgColor) => ({
    backgroundColor: bgColor,
    margin: SIZES.medium,
    padding: 5,
    borderRadius: SIZES.medium,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }),
  optionText: (color) => ({
    color: color,
    textAlign: "center",
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  }),
  googleOption: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    margin: SIZES.medium,
    marginBottom: 0,
    padding: 5,
    borderRadius: SIZES.medium,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
});

export default styles;