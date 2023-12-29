import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../assets/constants";

const Carousel = () => {
  const slides = [
    "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg",
    "https://th.bing.com/th/id/OIP.rvSWtRd_oPRTwDoTCmkP5gHaE8?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.W1fkF6di0Nmcy3Fyg5RJiwHaE8?rs=1&pid=ImgDetMain",
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
