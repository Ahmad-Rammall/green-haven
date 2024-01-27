import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    width: 98,
    height: 98,
    margin: 5,
    borderRadius: 10,
    overflow:"hidden",
    marginBottom: 10,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default styles;
