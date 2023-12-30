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

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { image, name, description, price } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image source={image} style={styles.image} />

        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>{price}</Text>
            </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
              {description ??
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpaaliquam nobis eveniet quos, quod dolore rem labore sint itaquetemporibus quaerat laboriosam maiores ipsum dolorem possimus minusfugit, quasi odio ea neque, omnis modi doloremquecumque ullam atque harum molestiae."}
            </Text>
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
