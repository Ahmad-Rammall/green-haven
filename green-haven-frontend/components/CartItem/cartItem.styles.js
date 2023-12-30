import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    height: 180,
    borderRadius: SIZES.xSmall,
    flexDirection: "row",
    padding: SIZES.xSmall,
    marginBottom: SIZES.small
  },
  leftContainer: {
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    borderRadius: SIZES.small,
  },
  rightContainer: {
    margin: SIZES.xSmall,
    justifyContent: "space-evenly"
  },
  text: (family, size) => ({
    fontFamily: family,
    fontSize: size,
  }),
  buttons:{
    flexDirection: "row",
    gap: 20,
  },
  quantity:{
    flexDirection: "row",
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.xSmall,
    width: "40%",
    justifyContent: "space-between",
    alignItems:"center",
  },
  quantityBtn:{
    backgroundColor: COLORS.primary,
    color: COLORS.offwhite,
    height: 35
  },
  minusBtn:{
    borderTopLeftRadius: SIZES.xSmall,
    borderBottomLeftRadius: SIZES.xSmall,
  },
  plusBtn:{
    borderTopRightRadius: SIZES.xSmall,
    borderBottomRightRadius: SIZES.xSmall,
  },
  deleteBtn:{
    backgroundColor: COLORS.red,
    color: COLORS.offwhite,
    borderRadius: SIZES.xSmall,
    padding: 5,
    textAlign: "center"
  }
});

export default styles;
