import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/constants";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 1,
    marginBottom: 20,
    alignItems: "center",
    paddingBottom: 5
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: "cover",
    marginRight: 10,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "68%",
  },
  userName: {
    fontFamily: "semibold",
    width: "100%",
  },

});

export default styles;
