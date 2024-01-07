import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.small,
  },
  emptyResult:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyResultText:{
    color: COLORS.gray2,
    fontFamily: "light",
    fontSize:30
  },
  title:{
    textAlign: "center",
    fontFamily: "bold",
    fontSize: SIZES.xxLarge,
  },
  genre:{
    color: COLORS.gray2,
    textAlign: "center",
    fontSize: SIZES.large
  },
  descriptionContainer:{
    backgroundColor: COLORS.offwhite,
    marginVertical: 10,
    marginHorizontal: SIZES.small,
    padding: 15,
    borderRadius: 5
  },
  descTitle:{
    fontFamily: "semibold",
  },
  buttons:{
    flexDirection: "row",
    justifyContent: "center",
  },

  //Option Buttons
  optionBtn:{
    backgroundColor: COLORS.secondary,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    padding: 10,
    marginBottom: 40
  },

  optText:{
    fontFamily: "semibold",
    color: COLORS.offwhite
  }
});

export default styles;
