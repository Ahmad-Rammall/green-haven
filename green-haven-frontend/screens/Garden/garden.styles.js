import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.offwhite,
  },
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginHorizontal: SIZES.medium + 2,
  },
  modalClose: {
    display: "none",
  },
  modalOpen: {
    display: "flex",
    position: "absolute",
    top: 0,
    width: SIZES.width,
    height:"100%",
  },
  scrollViewContainer: {
    flex: 1,
  },
  scrollViewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
