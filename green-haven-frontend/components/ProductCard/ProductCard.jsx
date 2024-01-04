import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import styles from "./productCardStyles";
import { useNavigation } from "@react-navigation/native";
import {PUBLIC_FOLDER} from "@env"

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  const { user, image, name, description, price } = product
  const imageUrl = PUBLIC_FOLDER + 'products-pics/' + image;

  const gotoProductDetails = () => {
    navigation.navigate("Product Details", { imageUrl, name, description, price })
  }
  return (
    <TouchableOpacity onPress={gotoProductDetails}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={ { uri: imageUrl } } style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.seller}>{user.name}</Text>
          <Text style={styles.price}>$ {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
