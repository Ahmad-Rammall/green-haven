import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import styles from "./productDetails.styles";
import { Ionicons } from "@expo/vector-icons";

const ProductsDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: "https://th.bing.com/th/id/OIP.W1fkF6di0Nmcy3Fyg5RJiwHaE8?rs=1&pid=ImgDetMain",
        }}
        style={styles.image}
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product Name</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 10.99</Text>
          </View>
        </View>

        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            aliquam nobis eveniet quos, quod dolore rem labore sint itaque
            temporibus quaerat laboriosam maiores ipsum dolorem possimus minus
            fugit, quasi odio ea neque, omnis modi cupiditate esse asperiores!
            Nostrum reprehenderit velit itaque saepe architecto doloremque ipsum
            nisi harum numquam debitis aperiam, iusto alias aliquam deserunt vel
            voluptate dolor laborum sapiente praesentium. Amet, est. Nesciunt
            mollitia in voluptate deserunt, quod numquam eligendi? Quas soluta
            dicta excepturi impedit iusto doloremque cumque ullam atque harum
            molestiae.
          </Text>
        </View>

        <TouchableOpacity style={styles.cartBtn}>
            <Text style={styles.addCart}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductsDetails;
