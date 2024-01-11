import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { OrderItem } from "../../components";
import { COLORS } from "../../assets/constants";

const Order = () => {
  return (
    <View style={{ backgroundColor: COLORS.offwhite, flex:1 }}>
      <OrderItem />
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({});
