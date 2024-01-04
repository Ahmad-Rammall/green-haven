import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./cartItem.styles";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { SIZES } from "../../assets/constants";

const CartItem = ({ product }) => {
  const [itemQuantity, setItemQuantity] = useState(product.quantity);
  const [isZero, setIsZero] = useState(false);

  const handleDecrement = () => {
    if (itemQuantity === 0) {
      // call delete
      console.log("saret 0");
      return;
    }
    if (itemQuantity === 1) {
      setItemQuantity(0);
      setIsZero(true);
    } else {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleIncrement = () => {
    setItemQuantity(itemQuantity + 1);
    setIsZero(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Carousel/plant1.jpg")}
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
