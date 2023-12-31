import { StyleSheet } from "react-native";
import { SIZES } from "../../assets/constants";
import { COLORS } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: SIZES.medium,
  },
  inputs:{
    marginTop: SIZES.medium
  },
  inputWrapper: {
    borderColor: COLORS.gray,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    marginVertical: SIZES.medium
  },
  input:{
    flex: 1,
    marginLeft: SIZES.medium,
  },
  btn:{
    marginVertical: SIZES.medium
  },
  error:{
    color: COLORS.red,
    fontFamily: "light",
    fontSize: SIZES.xSmall
  }
});

export default styles;
