import {
  Text,
  Image,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Button } from "../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./register.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";

const Register = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [secureText, setSecureText] = useState(true);

  validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    name: Yup.string().required("Name is required"),
  });

  return (
    <SafeAreaView style={styles.loginContainer}>
      <ScrollView onPress={Keyboard.dismiss()}>
        <Image
          source={require("../../assets/images/registerImage.png")}
          style={styles.image}
        />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            setFieldTouched,
            touched,
          }) => (
            <View>
              {/* Email */}
              <View style={styles.inputs}>
                <Text style={styles.label}>Email</Text>
                <View
                  style={styles.inputWrapper(
                    touched.email ? COLORS.primary : COLORS.white
                  )}
                >
                  <MaterialCommunityIcons
                    name="email-outline"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="Enter Your Email"
                    onFocus={() => setFieldTouched("email")}
                    onBlur={() => setFieldTouched("email", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    style={styles.input}
                  />
                </View>
                {touched.email && errors.email && (
                  <Text style={styles.errorMsg}>{errors.email}</Text>
                )}
              </View>

              {/* Name */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Name</Text>
                <View
                  style={styles.inputWrapper(
                    touched.name ? COLORS.primary : COLORS.white
                  )}
                >
                  <MaterialCommunityIcons
                    name="account-circle"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="Full Name"
                    onFocus={() => setFieldTouched("name")}
                    onBlur={() => setFieldTouched("name", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.name}
                    onChangeText={handleChange("name")}
                    style={styles.input}
                  />
                </View>
                {touched.name && errors.name && (
                  <Text style={styles.errorMsg}>{errors.name}</Text>
                )}
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
