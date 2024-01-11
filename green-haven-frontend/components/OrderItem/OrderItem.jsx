import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./orderItem.styles";
import { Ionicons } from "@expo/vector-icons";
import DeleteModal from "../DeleteModal/DeleteModal";
import { orderDataSource } from "../../core/dataSource/remoteDataSource/order";

const OrderItem = ({ order, refresh }) => {
  const { client, location, product, quantity, seller, totalAmount, _id } =
    order;
  const [isModalVisible, setModalVisible] = useState(false);

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

  const onDelete = async () => {
    try {
      const response = await orderDataSource.deleteOrder({ orderId: _id });
      if (response?.status === 200) {
        refresh();
      }
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const onClose = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.orderId}>{_id}</Text>
      <Detail title="Product Name" detail={product.name} />
      <Detail title="Client Name" detail={client.name} />
      <Detail title="Client Phone" detail={client.phone_number} />
      <Detail title="Location" detail={location} />
      <Detail title="Quantity" detail={quantity} />
      <Text style={styles.line}></Text>
      <View style={styles.bottomContainer}>
        <Detail title="Total Amount" detail={"$ " + totalAmount} />
        <TouchableOpacity
          style={styles.checkBtn}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.checkBtnText}>
            <Ionicons name="checkmark" size={15} /> Done
          </Text>
        </TouchableOpacity>
      </View>

      <DeleteModal
        isVisible={isModalVisible}
        onClose={onClose}
        onDelete={onDelete}
      />
    </View>
  );
};

export default OrderItem;
