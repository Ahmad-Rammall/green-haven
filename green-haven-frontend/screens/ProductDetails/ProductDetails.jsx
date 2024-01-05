import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./productDetails.styles";
import { useRoute } from "@react-navigation/native";
import { cartDataSource } from "../../core/dataSource/remoteDataSource/cart";
import Toast from "react-native-simple-toast";
import { Button } from "../../components";

const ProductDetails = () => {
  const route = useRoute();
  const { imageUrl, name, description, price, productId } = route.params;

  const addToCart = async () => {
    const response = await cartDataSource.addProductToCart({
      productId,
      quantity: 1,
    });
    if (response?.status == 200) {
      Toast.show("Product Added To Cart !", Toast.LONG);
    }
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

          <Button
            btnText="Add To Cart"
            isValid={true}
            style={styles.cartBtn}
            onPress={addToCart}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
