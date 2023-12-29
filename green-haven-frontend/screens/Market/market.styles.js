import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: SIZES.medium,
        marginTop:0,
        backgroundColor: COLORS.offwhite,
    },
    productsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 25
    }
})

export default styles;