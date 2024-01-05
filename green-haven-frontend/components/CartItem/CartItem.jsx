import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./cartItem.styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { SIZES } from "../../assets/constants";
import { PUBLIC_FOLDER } from "@env";

const CartItem = ({ product, totalAmount, setTotalAmount }) => {
  const [itemQuantity, setItemQuantity] = useState(product.quantity);
  const [isZero, setIsZero] = useState(false);

  const handleDecrement = () => {
    if (itemQuantity === 0) {
      // call delete
      console.log("saret 0");
      return;
    }

    // Decrement by 1
    setItemQuantity(itemQuantity - 1);
    setTotalAmount(
      (prevTotalAmount) => prevTotalAmount - product.product.price
    );
    if (itemQuantity === 1) {
      setIsZero(true);
    }
  };

  const handleIncrement = () => {
    setTotalAmount(
      (prevTotalAmount) =>
        prevTotalAmount - product.product.price * itemQuantity
    );
    setItemQuantity(itemQuantity + 1);
    setTotalAmount(
      (prevTotalAmount) =>
        prevTotalAmount + product.product.price * (itemQuantity + 1)
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
          <Text style={styles.text("bold", SIZES.small)}>
            {product.product.name}
          </Text>
          <Text style={styles.text("semibold", SIZES.small)}>
            $ {product.product.price}
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
                  name="ios-remove"
                  size={24}
                  style={styles.quantityBtn}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.quantityText}>{itemQuantity}</Text>
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
