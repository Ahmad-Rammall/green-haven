import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    margin: SIZES.medium,
  },
  name: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    alignSelf: "center",
    marginTop: 20
  },
  bio: {
    fontFamily: "light",
    textAlign: "center",
    color: COLORS.gray,
  },

  //Option Buttons

  optionBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: COLORS.gray2,
    padding: 10,
    borderRadius: 10,
    elevation: 10,
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
