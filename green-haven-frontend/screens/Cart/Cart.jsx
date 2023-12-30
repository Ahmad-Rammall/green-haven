import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartItem, Button } from "../../components";
import styles from "./cart.styles";
import React from "react";

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.totalAmount}>Total Amount : 50 $</Text>
        <Button btnText="Checkout" isValid={true}/>
      </View>
    </View>
  );
};

export default Cart;
