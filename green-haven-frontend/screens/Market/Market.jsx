import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { ProductCard, SearchBar } from "../../components";
import styles from "./market.styles";
import React, { useState, useEffect } from "react";
import { marketDataSource } from "../../core/dataSource/remoteDataSource/market";
import { useSelector } from "react-redux";

const Market = () => {
  const [products, setProducts] = useState([]);

  // get loggedin user
  const user = useSelector((state) => state.User);

  // get all market's products
  const getAllProducts = async () => {
    try {
      const response = await marketDataSource.getAllProducts();
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // get only loggedin seller's products
  const getAllSellerProducts = async () => {
    try {
      const response = await marketDataSource.getAllSellerProducts();
      if (response) {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user.role === "user") {
      getAllProducts();
    } else if (user.role === "seller") {
      getAllSellerProducts();
    }
  }, [user]);

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
            <ProductCard key={product._id} product={product} />
          ))}
        </View>
      </ScrollView>

      {user.role === "seller" && (
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Market;
