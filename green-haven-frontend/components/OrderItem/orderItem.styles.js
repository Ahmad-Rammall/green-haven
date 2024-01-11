import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    padding: 15,
    marginBottom: 10,
    borderRadius: 10
  },
  orderId: {
    fontFamily: "bold",
    fontSize: 19,
    marginVertical: 5
  },

  detailContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
  text: {
    width: 100,
    fontFamily: "light",
  },
  detail: {
    fontFamily: "regular",
  },
  line: {
    borderTopWidth: 1,
    marginTop: 10,
    borderStyle: "dashed",
  },
  bottomContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkBtn:{
    backgroundColor: COLORS.primary,
    padding:2,
    justifyContent: "center",
    borderRadius: 10,
    width: 70
  },
  checkBtnText:{
    color: COLORS.offwhite,
    fontFamily: "regular",
    textAlign: "center"
  }
});

export default styles;
