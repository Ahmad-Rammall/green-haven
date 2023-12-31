import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    margin: SIZES.medium,
  },
  wrapper: {

  },
  imageContainer:{
    
  },
  image: {
    borderWidth: 4,
    borderColor: COLORS.primary,
    borderRadius: 100,
    width: 150,
    height: 150,
    alignSelf: "center",
    resizeMode: "cover"
  },
  name: {
    fontFamily: "bold",
    fontSize: SIZES.large,
    alignSelf: "center"
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
