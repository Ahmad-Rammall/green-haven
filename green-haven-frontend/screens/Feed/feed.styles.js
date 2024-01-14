import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.offwhite,
    flex: 1,
  },
  stories: {
    flexDirection: "row",
    height: 80,
    borderTopWidth: 1,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  postsWrapper: {
    margin: SIZES.large,
    marginTop: 0,
  },
  noPosts: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noPostsText: {
    color: COLORS.gray2,
    fontFamily: "light",
    fontSize: 20,
  },
  searchResult: {
    backgroundColor: COLORS.secondary,
    marginTop: -10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 20,
    height: 150,
    overflow: "scroll",
  },
  userSearchResult: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: COLORS.gray2,
  },
  userSearchImg: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  userSearchName: {
    fontFamily: "regular",
    color: COLORS.gray,
    fontSize: 12
  },
  modalClose: {
    display: "none",
  },
  modalOpen: {
    display: "flex",
    position: "absolute",
    top: 0,
    width: SIZES.width,
    height: 1100,
  },
});

export default styles;
