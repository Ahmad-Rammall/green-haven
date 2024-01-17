import { View, ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { OrderItem, LoadingModal } from "../../components";
import styles from "./order.styles";
import { orderDataSource } from "../../core/dataSource/remoteDataSource/order";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(true);

  const getOrders = async () => {
    try {
      setLoading(true);
      const response = await orderDataSource.getAllSellerOrders();
      if (response?.status === 200) {
        setOrders(response.data.orders);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshPage = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getOrders();
  }, [refresh]);

  return (
    <View style={styles.container}>
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          {orders?.length === 0 ? (
            <View style={styles.emptyOrders}>
              <Text style={styles.emptyOrdersText}>No Orders</Text>
            </View>
          ) : (
            <ScrollView
              style={styles.wrapper}
              showsVerticalScrollIndicator={false}
            >
              {orders.map((order) => (
                <OrderItem key={order._id} order={order} refresh={refreshPage} />
              ))}
            </ScrollView>
          )}
        </>
      )}
    </View>
  );
};

export default Order;
