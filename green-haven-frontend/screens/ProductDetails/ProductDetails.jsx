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
import { PUBLIC_FOLDER } from "@env";

const ProductDetails = () => {
  const route = useRoute();
  const { imageUrl, name, description, price } = route.params;

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

          <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.addCart}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
