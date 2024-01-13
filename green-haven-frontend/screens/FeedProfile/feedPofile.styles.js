import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.offwhite,
    },
    wrapper:{
        margin: SIZES.small,
    },
    topContainer:{
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "center",
        marginBottom: 20
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: "cover"
    },
    buttons:{
        flexDirection: "row",
        gap: 10,
    },
    userName:{
        alignSelf: "center",
        marginBottom: 5,
        fontFamily: "bold",
        fontSize: SIZES.medium
    },
    btn:{
        padding: 5,
        borderRadius: 10,
        alignItems: "center"
    },
    followBtn:(color) => ({
        backgroundColor: color,
        width: 80,
    }),
    followTxt:{
        fontFamily:"bold",
        color: COLORS.offwhite
    },
    messageBtn:{
        backgroundColor: COLORS.blue,
        width: 50,
    },
    bottomContainer:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
        alignItems: "center"
    },
    bottomElement:{
        alignItems: "center"
    },
    elementNumber:{
        fontFamily: "bold"
    },
    elementName:{
        fontFamily: "light",
        color: COLORS.gray,
        fontSize: 12
    }

});

export default styles