import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: SIZES.medium,
  },
  modalClose: {
    display: "none",
  },
  modalOpen: {
    display: "flex",
    position: "absolute",
    top: 0,
    width: SIZES.width,
    height: 1100,
  },
  noPlants:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  noPlantsText:{
    color: COLORS.gray2,
    fontFamily: "light",
    fontSize: 20
  }
});

export default styles;
