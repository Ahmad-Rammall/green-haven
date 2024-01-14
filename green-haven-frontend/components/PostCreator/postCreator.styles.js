import { StyleSheet } from "react-native";
import { COLORS } from "../../assets/constants";

const styles = StyleSheet.create({
    share: {
      borderRadius: 20,
      backgroundColor: COLORS.secondary,
      marginBottom: 20,
    },
    container: {
      padding: 20,
    },
    top: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    profilePic: {
      width: 40,
      height: 40,
      borderRadius: 50,
      objectFit: "cover",
    },
    input: {
      flex: 1,
      borderWidth: 0,
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
    selectedImgContainer: {
      marginVertical: 10,
    },
    selectedImg: {
      aspectRatio: 1,
      borderRadius: 10,
    },
    removeIcon: {
      position: "absolute",
      right: 0,
      padding: 5,
    },
    hr: {
      marginVertical: 10,
      borderBottomWidth: 0.5,
    },
    bottom: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    left: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
    imageIcon: {
      height: 25,
      width: 25,
    },
    span: {
      fontSize: 12,
      color: "gray",
    },
    shareButton: {
      padding: 5,
      color: COLORS.offwhite,
      backgroundColor: COLORS.primary,
      borderRadius: 3,
    },
  });

export default styles;