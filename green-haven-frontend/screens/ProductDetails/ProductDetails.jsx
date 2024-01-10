import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import styles from "./productDetails.styles";
import { useRoute } from "@react-navigation/native";
import { cartDataSource } from "../../core/dataSource/remoteDataSource/cart";
import Toast from "react-native-simple-toast";
import { Button, ProductModal } from "../../components";
import { useSelector } from "react-redux";
import { COLORS } from "../../assets/constants";

const ProductDetails = () => {
  const route = useRoute();
  const { imageUrl, name, description, price, productId } = route.params;
  const currentUser = useSelector((state) => state.User);
  const [isVisible, setIsVisible] = useState(false);

  const addToCart = async () => {
    const response = await cartDataSource.addProductToCart({
      productId,
      quantity: 1,
    });
    if (response?.status == 200) {
      Toast.show("Product Added To Cart !", Toast.LONG);
    }
  };

  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$ {price}</Text>
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>{description}</Text>
          </View>

          {currentUser.role !== "seller" ? (
            <Button
              btnText="Add To Cart"
              isValid={true}
              style={styles.cartBtn}
              onPress={addToCart}
            />
          ) : (
            <View style={styles.sellerOptions}>
              <TouchableOpacity style={[styles.sellerOption, styles.deleteBtn]}>
                <Text style={styles.optionTxt}>Delete</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.sellerOption, styles.updateBtn]}
                onPress={() => setIsVisible(true)}
              >
                <Text style={styles.optionTxt}>Update</Text>
              </TouchableOpacity>

              <ProductModal
                isVisible={isVisible}
                onClose={onClose}
                details={route.params}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
