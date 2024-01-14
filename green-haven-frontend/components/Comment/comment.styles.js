import { StyleSheet } from "react-native";
import { SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginHorizontal: SIZES.small,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  userName: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  commentText: {
    color: "#333",
  },
  likeButton: {
    flexDirection: "row",
    marginLeft: 15,
    alignItems: "center",
    gap: 2,
  },
  likeCounter: {
    fontFamily: "regular",
    fontSize: 12,
  },
});

export default styles;
