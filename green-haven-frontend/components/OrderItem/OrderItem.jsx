import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./orderItem.styles";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={styles.bottomContainer}>
        <Detail title="Total Amount" detail={"$ 10"} />
        <TouchableOpacity style={styles.checkBtn}>
          <Text style={styles.checkBtnText}>
            <Ionicons name="checkmark" size={15}/> Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
