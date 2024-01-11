import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "./orderItem.styles";

const OrderItem = () => {
  const Detail = ({ title, detail }) => {
    return (
      <View style={styles.detailContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text> : </Text>
        </View>
        <Text style={styles.detail}>{detail}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.orderId}>Order Id</Text>
      <Detail title="Client Name" detail={"xxxxxxxxxxxxxxxxxxxx"} />
      <Detail title="Client Phone" detail={"xxxxxxxxxxxxxxxxxxxx"} />
      <Detail title="Location" detail={"xxxxxxxxxxxxxxxxxxxx"} />
      <Detail title="Quantity" detail={"xxxxxxxxxxxxxxxxxxxx"} />
      <Text style={styles.line}></Text>
      <Detail title="Total Amount" detail={"$ 10"} />
    </View>
  );
};

export default OrderItem;
