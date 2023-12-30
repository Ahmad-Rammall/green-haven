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
        <SearchBar />
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
    </View>
  );
};

export default Market;
