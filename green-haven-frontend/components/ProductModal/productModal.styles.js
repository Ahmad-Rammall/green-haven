import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../assets/constants";

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    marginBottom: 50,
  },
  button:(bgColor)=>( {
    padding: 5,
    color: "blue",
    backgroundColor: bgColor,
    borderRadius: 5,
    color: COLORS.offwhite,
    fontFamily: "semibold",
    width: 70,
    textAlign: "center"
  }),
  inputs: { marginBottom: SIZES.large },
  label: {
    fontFamily: "regular",
    marginBottom: 5,
    marginEnd: 5,
    fontSize: SIZES.xSmall,
  },
  errorMsg: {
    color: COLORS.red,
    fontFamily: "regular",
    marginTop: 5,
    marginLeft: 5,
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
  input:{
    flex:1
  }
});

export default styles;
