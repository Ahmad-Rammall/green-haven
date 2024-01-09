import { ScrollView, Text, View } from "react-native";
import { CartItem, Button, LocationModal } from "../../components";
import styles from "./cart.styles";
import React, { useState, useEffect } from "react";
import { cartDataSource } from "../../core/dataSource/remoteDataSource/cart";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [location, setLocation] = useState("");

  const updateQuantity = (productId, quantity, sellerId) => {
    if (quantity == 0) {
      setQuantities((prevQuantities) => {
        const newQuantities = { ...prevQuantities };
        delete newQuantities[productId];
        return newQuantities;
      });
      return;
    }
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const sendOrders = async () => {
    for (let productId in quantities) {
      console.log(productId)
      let order = {
        productId,
        quantity: quantities[productId],
        location
      };
      // Replace this with your actual API call
      try {
        const response = await cartDataSource.createOrder(order)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    // Close the modal after sending the orders
    toggleModal();
  };

  useEffect(() => {
    console.log(quantities);
  }, [quantities]);

  const getAllProducts = async () => {
    const response = await cartDataSource.getAllCartProducts();
    setProducts(response.data.cart);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getAllProducts();
  }, [refresh]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScrollView>
          {products.map((product) => (
            <CartItem
              key={product._id}
              product={product}
              setTotalAmount={setTotalAmount}
              setRefresh={setRefresh}
              updateQuantity={updateQuantity}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmount}>Total Amount : </Text>
          <Text style={styles.totalAmount}>$ {totalAmount}</Text>
        </View>
        <Button btnText="Checkout" isValid={true} onPress={toggleModal} />
      </View>

      <LocationModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        style={styles.modal}
        setLocation={setLocation}
        sendOrders={sendOrders}
      />
    </View>
  );
};

export default Cart;
