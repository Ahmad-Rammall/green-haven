import { StyleSheet } from "react-native";
import {COLORS} from "../../assets/constants"
const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        width: "100%",
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1,
        marginBottom: 20,
        alignItems: "center",
    },
    image:{
        width: 70,
        height: 70,
        resizeMode: "cover",
        marginRight: 10,
        
    },
    topContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "68%",
    },
    rightContainer:{
        justifyContent: "space-evenly",
        
    },
    userName:{
        fontFamily: "bold",
    },
    lastMsg:{
        color: COLORS.gray,
        fontFamily: "light"
    },
    time:{
        fontFamily: "light",
        color: COLORS.gray,
    }
})

export default styles