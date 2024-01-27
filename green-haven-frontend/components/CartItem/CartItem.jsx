import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./cartItem.styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { SIZES } from "../../assets/constants";
import { PUBLIC_FOLDER } from "@env";
import { cartDataSource } from "../../core/dataSource/remoteDataSource/cart";
PUBLIC_FOLDER

const CartItem = ({ product, setRefresh, setTotalAmount, updateQuantity}) => {
  const [isZero, setIsZero] = useState(true);

  useEffect(() => {
    updateQuantity(product.product._id, product.quantity);
  },[])

  const handleDecrement = async () => {
    if (product.quantity === 1) {
      product.quantity =0;
      await cartDataSource.deleteCartProduct({
        productId: product._id,
      });
      updateQuantity(product.product._id, product.quantity);

      setTotalAmount(
        (prevTotalAmount) => prevTotalAmount - product.product.price
      );
      setRefresh((prevVal) => !prevVal);
      return;
    }

    product.quantity = product.quantity - 1;
    updateQuantity(product.product._id, product.quantity);
    setTotalAmount(
      (prevTotalAmount) => prevTotalAmount - product.product.price
    );
    if (product.quantity === 1) {
      setIsZero(true);
    }
  };

  const handleIncrement = () => {
    setTotalAmount(
      (prevTotalAmount) =>
        prevTotalAmount - product.product.price * product.quantity
    );
    product.quantity = product.quantity + 1;
    updateQuantity(product.product._id, product.quantity);
    setTotalAmount(
      (prevTotalAmount) =>
        prevTotalAmount + product.product.price * (product.quantity + 1)
    );
    setIsZero(false);
  };

  useEffect(() => {
    setTotalAmount(
      (prevTotalAmount) => prevTotalAmount + product.product.price
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={{
            uri: PUBLIC_FOLDER + "products-pics/" + product.product.image,
          }}
        />
      </View>

      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.text("bold", 14)}>
            {product.product.name}
          </Text>
          <Text style={styles.text("semibold", SIZES.small)}>
            ${product.product.price}
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.quantity}>
            <TouchableOpacity onPress={() => handleDecrement()}>
              {isZero ? (
                <Ionicons
                  name="trash-outline"
                  size={24}
                  style={styles.quantityBtn}
                />
              ) : (
                <Ionicons
                  name="remove"
                  size={24}
                  style={styles.quantityBtn}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.quantityText}>{product.quantity}</Text>
            <TouchableOpacity onPress={() => handleIncrement()}>
              <Ionicons name="add" size={24} style={styles.quantityBtn} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
