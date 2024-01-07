import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.offwhite
  },
  wrapper:{
    margin: SIZES.large,
    flex:1,
  },
  name: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    alignSelf: "center",
    marginTop: 20,
  },
  bio: {
    fontFamily: "light",
    textAlign: "center",
    color: COLORS.gray,
  },
  shadow: SHADOWS.medium,
  buttons:{
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },

  //Option Buttons

  optionBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.gray2,
    padding: 10,
    borderRadius: 10,
    marginVertical: 15,
  },

  optionTxt:{
    fontFamily: "semibold",
    fontSize: 15
  },
  optionButtons:{
    marginVertical: 30
  },

  logoutBtn:{
    height: 160
  }
});

export default styles;
