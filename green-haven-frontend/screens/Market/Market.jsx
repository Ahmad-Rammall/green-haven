import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ProductCard, SearchBar } from "../../components";
import styles from "./market.styles";
import React, { useState, useEffect } from "react";
import { marketDataSource } from "../../core/dataSource/remoteDataSource/market";
import { local } from "../../core/helpers/localStorage";

const Market = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const response = await marketDataSource.getAllProducts();
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.wrapper}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SearchBar placeholder="What Are You Looking For ?" />
        <View style={styles.productsContainer}>
          {products.map((product) => (
            <ProductCard
              image={product.image}
              name={product.name}
              sellerName={product.image}
              price={product.price}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Market;
