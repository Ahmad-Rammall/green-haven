import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.offwhite,
    flex: 1,
    height: SIZES.height
  },
  wrapper: {
    marginHorizontal: SIZES.medium,
  },
  image: {
    height: SIZES.height / 3.5,
    resizeMode: "contain",
    alignSelf: "center"
  },
  notes:{
    fontFamily: "light",
    fontSize: SIZES.xSmall,
    color: COLORS.gray2,
    textAlign: "center",
    marginVertical: 15
  },
  inputs: {
    marginBottom: SIZES.large,
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
});

export default styles;
