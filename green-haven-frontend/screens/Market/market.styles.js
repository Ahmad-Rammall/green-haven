import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../assets/constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.offwhite,
    },
    wrapper:{
    },
    productsContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: 25
    }
})

export default styles;