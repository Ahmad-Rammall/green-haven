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
    marginVertical: 30,
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
});

export default styles;
