import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartItem, Button } from "../../components";
import styles from "./cart.styles";
import React, { useState, useEffect } from "react";
import { cartDataSource } from "../../core/dataSource/remoteDataSource/cart";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0)
  const [refresh, setRefresh] = useState(false)
  
  const getAllProducts = async () => {
    const response = await cartDataSource.getAllCartProducts();
    setProducts(response.data.cart);
  };

  useEffect(() => {
    getAllProducts();
  }, [refresh]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          {products.map((product) => (
            <CartItem
              key={product._id}
              product={product}
              setTotalAmount={setTotalAmount}
              setRefresh={setRefresh}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.totalAmount}>Total: $ {totalAmount}</Text>
        <Button btnText="Checkout" isValid={true} />
      </View>
    </View>
  );
};

export default Cart;
