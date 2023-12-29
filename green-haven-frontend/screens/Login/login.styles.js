import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  image: {
    height: SIZES.height / 3,
    width: SIZES.width,
    resizeMode: "contain",
    marginBottom: SIZES.xLarge,
  },
  inputs: {
    marginBottom: 20,
    marginHorizontal: 20,
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
    marginLeft: SIZES.medium
  },
  errorMsg: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
    fontSize: SIZES.xSmall,
  },
});

export default styles;
