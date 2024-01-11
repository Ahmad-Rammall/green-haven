import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { OrderItem } from "../../components";
import styles from "./order.styles";
import { orderDataSource } from "../../core/dataSource/remoteDataSource/order";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);

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
  }, [refresh]);

  return (
    <View style={styles.container}>
      {orders?.length === 0 ? (
        <View style={styles.emptyOrders}>
          <Text style={styles.emptyOrdersText}>No Orders</Text>
        </View>
      ) : (
        <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
          {orders.map((order) => (
            <OrderItem order={order} setRefresh={setRefresh} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Order;
