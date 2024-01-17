import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        padding: 15,
        marginBottom: 15,
    },
    imageContainer:{
        width: "100%",
        height: 250,
    },
    postImage:{
        resizeMode: "contain",
        width: "100%",
        height: "100%",
        borderRadius: 5,
        alignSelf: "center",
    },
    description:{
        fontFamily: "regular",
        fontSize: SIZES.small,
        marginVertical: 10
    },
    bottomContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    profileContainer:{
        flexDirection: "row",
        alignItems: "center",
        gap: 7,
    },
    profilePic:{
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    userName: {
        fontFamily: "semibold",
        fontSize: SIZES.small,
    },
    time:{
        fontFamily: "light",
        fontSize: SIZES.xSmall,
        color: COLORS.gray
    },
    buttons:{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    button:{
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    }

});

export default styles