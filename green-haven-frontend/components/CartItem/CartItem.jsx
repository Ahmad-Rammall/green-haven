import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./cartItem.styles";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SIZES } from "../../assets/constants";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/images/Carousel/plant1.jpg")}
        />
      </View>

      <View style={styles.rightContainer}>
        <View>
          <Text style={styles.text("bold", SIZES.large)}>Plant Name</Text>
          <Text style={styles.text("semibold", SIZES.medium)}>10 $</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.quantity}>
            <TouchableOpacity>
              <Ionicons
                name="ios-remove"
                size={24}
                style={[styles.quantityBtn, styles.minusBtn]}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, marginHorizontal: 10 }}>1</Text>
            <TouchableOpacity>
              <Ionicons
                name="add"
                size={24}
                style={[styles.quantityBtn, styles.plusBtn]}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.delete}>
            <TouchableOpacity>
              <Ionicons
                name="trash-outline"
                size={24}
                style={styles.deleteBtn}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
