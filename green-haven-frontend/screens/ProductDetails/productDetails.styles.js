import { StyleSheet } from "react-native"; 
import { COLORS, SIZES } from "../assets/constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.lightWhite,
    },
    upperRow:{
        marginHorizontal: 10,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge,
        width: SIZES.width -44,
        zIndex: 999,
    },
    image:{
        aspectRatio: 1,
        resizeMode: "cover",
    },
    details:{
        marginTop: -SIZES.small,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -64,
        top: 20,
    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    priceWrapper:{
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price:{
        padding: 10,
        fontFamily: "bold",
        fontSize: SIZES.large
    },
    descriptionWrapper:{
        marginTop: SIZES.large,
        marginHorizontal: SIZES.large,
    },
    description:{
        fontFamily: "medium",
        fontSize: SIZES.large,
    },
    descText:{
        fontFamily: "regular",
        fontSize: SIZES.small,
        textAlign: "justify",
        marginBottom: SIZES.small
    },
    cartBtn:{
        backgroundColor: COLORS.primary,
        color: COLORS.white,
        padding: SIZES.small,
        borderRadius: SIZES.large,
        margin: SIZES.small,
    },
    addCart:{
        color: COLORS.white,
        textAlign: "center"
    }
});

export default styles;