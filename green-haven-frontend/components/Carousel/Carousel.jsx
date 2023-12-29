import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../assets/constants";

const Carousel = () => {
  const slides = [
    require("../../assets/images/plant1.jpg"),
    require("../../assets/images/plant2.jpg"),
    require("../../assets/images/plant3.jpg"),
    require("../../assets/images/plant4.jpg"),
  ];
  
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveColor={COLORS.secondary}
        ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 15 }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
