import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        width: 155,
        height: 200,
        margin: SIZES.small,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary,
    },
    imageContainer:{
        flex:1,
        width: "100%",
        borderRadius: SIZES.small,
        overflow: "hidden",
    },
    image:{
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details:{
        paddingLeft: 3,
    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.medium,
        paddingTop: 5,
    },
    seller:{
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray,
    },
    price:{
        fontFamily: "medium",
        fontSize: SIZES.medium,
    }

})

export default styles;