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
import { Button, ProductModal, DeleteModal } from "../../components";
import { useSelector } from "react-redux";
import { COLORS } from "../../assets/constants";
import { marketDataSource } from "../../core/dataSource/remoteDataSource/market";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {
  const route = useRoute();
  const { imageUrl, name, description, price, productId } = route.params;
  const currentUser = useSelector((state) => state.User);
  const [isVisible, setIsVisible] = useState(false);
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);

  const navigation = useNavigation();

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
    setIsDeleteVisible(false);
  };

  const deleteProduct = async () => {
    try {
      const response = await marketDataSource.deleteProduct(productId);
      console.log(response);
      if (response?.status === 200) {
        Toast.show("Product Deleted !", Toast.LONG);
        navigation.navigate("Market");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View style={styles.details}>
          <ScrollView contentContainerStyle={styles.detailsWrapper} showsVerticalScrollIndicator={false}>
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
          </ScrollView>

          {currentUser.role !== "seller" ? (
            <View style={styles.fixedBottomContainer}>
              <Button
                btnText="Add To Cart"
                isValid={true}
                onPress={addToCart}
              />
            </View>
          ) : (
            <View style={[styles.sellerOptions, styles.fixedBottomContainer]}>
              <TouchableOpacity
                style={[styles.sellerOption, styles.deleteBtn]}
                onPress={() => setIsDeleteVisible(true)}
              >
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

              <DeleteModal
                isVisible={isDeleteVisible}
                onClose={onClose}
                onDelete={deleteProduct}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
