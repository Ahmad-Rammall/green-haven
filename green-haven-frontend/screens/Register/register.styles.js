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
});

export default styles;
