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
    height: 315,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 20,
  },
  detailsWrapper: { paddingBottom: 65 },
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
  sellerOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  sellerOption: {
    padding: 5,
    borderRadius: 10,
    marginVertical: SIZES.small,
    width: 130
  },
  updateBtn: {
    backgroundColor: COLORS.primary,
  },
  deleteBtn: {
    backgroundColor: COLORS.red,
  },
  optionTxt: {
    color: COLORS.white,
    textAlign: "center",
    fontFamily: "semibold",
    fontSize: SIZES.medium,
  },
  fixedBottomContainer: {
    position: "absolute",
    bottom: 0,
    right: SIZES.large,
    left: SIZES.large,
    backgroundColor: COLORS.offwhite,
  },
});

export default styles;
