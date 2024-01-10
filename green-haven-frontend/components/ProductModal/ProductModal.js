import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../assets/constants";
import styles from "./productModal.styles";

const ProductModal = () => {
    const validationSchema = Yup.object({
        description: Yup.string()
          .max(500, "Max 500 characters")
          .required("Required"),
        name: Yup.string().max(50, "Max 50 Characters").required("Required"), // Fixed the typo and added the missing parenthesis
        price: Yup.number()
          .required("Price is required")
          .positive("Number must be positive")
          .min(1, "Price must be at least $ 1"),
      });
  return (
    <View>
      <Text>ProductModal</Text>
    </View>
  )
}

export default ProductModal

