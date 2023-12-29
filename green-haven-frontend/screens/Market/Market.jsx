import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ProductCard } from "../../components";
import styles from "./market.styles";
import React from "react";

const Market = () => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.productsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  );
};

export default Market;
