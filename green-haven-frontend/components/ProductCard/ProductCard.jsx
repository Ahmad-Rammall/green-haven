import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const x =
  "https://th.bing.com/th?id=OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2";

const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://th.bing.com/th?id=OIP.3MxqaJv2Z5QsG7wIXzizjAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>Product Name</Text>
          <Text style={styles.seller}>Ahmad Rammal</Text>
          <Text style={styles.price}>10$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
