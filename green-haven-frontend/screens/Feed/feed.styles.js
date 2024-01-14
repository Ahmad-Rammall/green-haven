import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.offwhite,
        flex:1,
    },
    stories:{
        flexDirection: "row",
        height: 80,
        borderTopWidth: 1,
        backgroundColor: COLORS.primary,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    postsWrapper:{
        margin: SIZES.large,
        marginTop: 0
    },
    noPosts:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    noPostsText:{
        color: COLORS.gray2,
        fontFamily: "light",
        fontSize: 20
    }
})

export default styles