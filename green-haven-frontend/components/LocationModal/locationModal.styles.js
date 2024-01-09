import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    margin: SIZES.large,
    position: "absolute",
    bottom: "40%",
    left:0, 
    right: 0,
    height: 200,
    borderRadius: 10,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    borderColor: COLORS.gray,
    backgroundColor: COLORS.lightWhite,
    borderWidth: 1,
    height: 50,
    borderRadius: 12,
    width: "90%",
  },
  buttons: {
    width: "90%",
    flexDirection: "row",
    gap: 20,
    justifyContent: "flex-end",
    marginTop: 20
  },
});

export default styles;
