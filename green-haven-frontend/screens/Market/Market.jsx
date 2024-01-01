import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ProductCard, SearchBar } from "../../components";
import styles from "./market.styles";
import React from "react";

const Market = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.wrapper}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SearchBar placeholder="What Are You Looking For ?"/>
        <View style={styles.productsContainer}>
          <ProductCard
            image={require("../../assets/images/Carousel/plant1.jpg")}
            name="Plant"
            sellerName="Ahmad Rammal"
            price="20 $"
          />
          <ProductCard
            image={require("../../assets/images/Carousel/plant2.jpg")}
            name="Plant"
            sellerName="Ahmad Rammal"
            price="10 $"
          />
          <ProductCard
            image={require("../../assets/images/Carousel/plant3.jpg")}
            name="Plant"
            sellerName="Ahmad Rammal"
            price="10 $"
          />
          <ProductCard
            image={require("../../assets/images/Carousel/plant4.jpg")}
            name="Plant"
            sellerName="Ahmad Rammal"
            price="10 $"
          />
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Market;
