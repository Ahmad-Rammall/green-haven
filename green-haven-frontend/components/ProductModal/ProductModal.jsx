import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS } from "../../assets/constants";
import styles from "./productModal.styles";
import ImageContainer from "../ImageContainer/ImageContainer";
import { PUBLIC_FOLDER } from "@env";
import { marketDataSource } from "../../core/dataSource/remoteDataSource/market";
import Toast from "react-native-simple-toast";

const ProductModal = ({ isVisible, onClose, refresh, details }) => {
  const [image, setImage] = useState({});
  console.log(details);

  // if plant has no image
  const noProductImage = PUBLIC_FOLDER + "products-pics/noProductImage.jpg";

  const validationSchema = Yup.object({
    description: Yup.string()
      .max(500, "Max 500 characters")
      .required("Required"),
    name: Yup.string().max(50, "Max 50 Characters").required("Required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Number must be positive")
      .min(1, "Price must be at least $ 1"),
  });

  const handleImageChange = (key, value) => {
    setImage(value);
  };

  const handleCreateProduct = async (values) => {
    const { description, name, price } = values;

    const data = new FormData();

    // Append each piece of information to the form data
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    if (image.uri) {
      data.append("file", {
        uri: image.uri,
        type: "image/jpeg",
        name: "product.jpg",
      });
    }

    try {
      const response = await marketDataSource.addProduct(data);
      if (response?.status === 200) {
        Toast.show("Product Added !", Toast.LONG);
        onClose();
        refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProduct = async (values) => {
    const { description, name, price } = values;
    const productId = details.productId;
    const data = new FormData();

    // Append each piece of information to the form data
    data.append("productId", productId);
    data.append("name", name);
    data.append("description", description);
    data.append("price", price);
    if (image.uri) {
      data.append("file", {
        uri: image.uri,
        type: "image/jpeg",
        name: "product.jpg",
      });
    }

    try {
      const response = await marketDataSource.updateProduct(data);
      console.log(response);
      if (response?.status === 200) {
        Toast.show("Product Updated !", Toast.LONG);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isVisible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.image}>
          <ImageContainer
            image={details ? details.imageUrl : noProductImage}
            handleFormChange={handleImageChange}
            edit
          />
        </View>

        <Formik
          initialValues={
            details
              ? {
                  description: details.description,
                  price: String(details.price),
                  name: details.name,
                }
              : {
                  description: "",
                  price: "",
                  name: "",
                }
          }
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (details) {
              handleUpdateProduct(values);
            } else {
              handleCreateProduct(values);
            }
          }}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <View>
              {/* Name */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Name</Text>
                <View
                  style={styles.inputWrapper(
                    touched.name ? COLORS.primary : COLORS.gray
                  )}
                >
                  <TextInput
                    placeholder="Name"
                    onFocus={() => setFieldTouched("name")}
                    onBlur={() => setFieldTouched("name", "")}
                    value={values.name}
                    onChangeText={handleChange("name")}
                    style={styles.input}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errorMsg}>{errors.name}</Text>
                )}
              </View>

              {/* Description */}
              <View style={styles.inputs}>
                <Text style={styles.label}>Description</Text>
                <View
                  style={styles.inputWrapper(
                    touched.description ? COLORS.primary : COLORS.gray
                  )}
                >
                  <TextInput
                    placeholder="Description"
                    onFocus={() => setFieldTouched("description")}
                    onBlur={() => setFieldTouched("description", "")}
                    value={values.description}
                    onChangeText={handleChange("description")}
                    style={styles.input}
                  />
                </View>
                {touched.description && errors.description && (
                  <Text style={styles.errorMsg}>{errors.description}</Text>
                )}
              </View>

              {/* Price */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Price</Text>
                <View
                  style={styles.inputWrapper(
                    touched.price ? COLORS.primary : COLORS.gray
                  )}
                >
                  <TextInput
                    placeholder="Price"
                    onFocus={() => setFieldTouched("price")}
                    onBlur={() => setFieldTouched("price", "")}
                    value={values.price}
                    onChangeText={handleChange("price")}
                    keyboardType={"numeric"}
                    style={styles.input}
                  />
                </View>
                {touched.price && errors.price && (
                  <Text style={styles.errorMsg}>{errors.price}</Text>
                )}
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onClose}>
                  <Text style={styles.button(COLORS.gray2)}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text
                    style={styles.button(COLORS.primary)}
                    onPress={handleSubmit}
                  >
                    Add
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default ProductModal;
