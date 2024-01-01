import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 80,
    height: 80,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
  userName: {
    color: COLORS.offwhite,
    fontFamily: "regular",
    fontSize: 11,
    marginTop: 2
  },
  plus: {
    position: "absolute",
    bottom: 0,
    right: -2,
    fontSize: 15,
    backgroundColor: COLORS.offwhite,
    borderRadius: 50,
    width: 15,
    height: 15,
  },
});

export default styles;
