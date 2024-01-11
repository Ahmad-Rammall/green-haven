import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { OrderItem } from "../../components";
import { COLORS } from "../../assets/constants";
import styles from "./order.styles";

const Order = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </ScrollView>
    </View>
  );
};

export default Order;
