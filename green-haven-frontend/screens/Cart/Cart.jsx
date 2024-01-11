import { ScrollView, Text, View } from "react-native";
import { CartItem, Button, LocationModal } from "../../components";
import styles from "./cart.styles";
import React, { useState, useEffect } from "react";
import { cartDataSource } from "../../core/dataSource/remoteDataSource/cart";
import Toast from "react-native-simple-toast";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [location, setLocation] = useState("");
  const [orderFinished, setOrderFinished] = useState(false)

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

  const resetCart = async() => {
    try {
      const res = await cartDataSource.resetCart();
      setRefresh(!refresh)
    } catch (error) {
      console.log(error)
    }
  }

  const sendOrders = async () => {
    for(let productId in quantities) {
      let order = {
        productId,
        quantity: quantities[productId],
        location
      };

      try {
        const response = await cartDataSource.createOrder(order)
        console.log(response)
        if(response?.status === 200 && orderFinished === false){
          setOrderFinished(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    resetCart();
    Toast.show("Order Created !", Toast.LONG)
    // Close the modal after sending the orders
    toggleModal();
  };

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
