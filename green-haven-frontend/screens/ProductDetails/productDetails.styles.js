import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    aspectRatio: 1,
  },
  details: {
    marginTop: -SIZES.small,
    backgroundColor: COLORS.lightWhite,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
    paddingHorizontal: SIZES.xLarge,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  price: {
    padding: 10,
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  descriptionWrapper: {
    marginTop: 30,
  },
  description: {
    fontFamily: "medium",
    fontSize: SIZES.large,
  },
  descText: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    textAlign: "justify",
  },
  sellerOptions:{
    flexDirection: "row",
    width:"100%",
    justifyContent: "space-between",
  },
  sellerOption:{  
    padding: 5,
    borderRadius: SIZES.medium,
    marginBottom: SIZES.small
  },
  updateBtn:{
    backgroundColor: COLORS.primary,
    width:"65%",
  },
  deleteBtn:{
    backgroundColor: COLORS.red,
    width:"30%",
  },
  optionTxt: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "semibold",
    fontSize: SIZES.medium
  },
});

export default styles;
