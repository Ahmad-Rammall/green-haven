import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        alignItems: "flex-start",
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
        marginHorizontal: SIZES.xSmall
    }
})

export default styles