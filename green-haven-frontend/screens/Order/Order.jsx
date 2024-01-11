import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { OrderItem } from "../../components";
import styles from "./order.styles";
import { orderDataSource } from "../../core/dataSource/remoteDataSource/order";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    try {
      const response = await orderDataSource.getAllSellerOrders();
      setOrders(response.data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
        {orders.map((order) => <OrderItem order={order}/>)}
      </ScrollView>
    </View>
  );
};

export default Order;
