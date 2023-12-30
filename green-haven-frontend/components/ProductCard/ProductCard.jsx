import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import styles from "./productCardStyles";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ image, name, sellerName, price }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Product Details")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={ image } style={styles.image} />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.seller}>{sellerName}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
