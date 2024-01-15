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
import styles from "../Login/auth.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import { authDataSource } from "../../core/dataSource/remoteDataSource/auth";

const Register = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [secureText, setSecureText] = useState(true);
  const [selectedOption, setSelectedOption] = useState("user");
  const [responseError, setResponseError] = useState("");

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
    role: Yup.string().required("Role is required"),
  });

  const handleRegister = async (values) => {
    const response = await authDataSource.register(values);
    if (response?.status == 200) {
      navigation.navigate("Login");
      setResponseError("")
    } else {
      setResponseError("Failed to Register. Try Again !")
    }
  };

  return (
    <SafeAreaView style={styles.loginContainer}>
      <ScrollView onPress={Keyboard.dismiss()} style={styles.wrapper}>
        <View style={styles.registerWrapper}>
        <Text style={styles.registerTitle}>Register</Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            confirmPassword: "",
            role: "user",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleRegister(values)}
        >
          {({
            handleChange,
            setFieldValue,
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
                    touched.email ? COLORS.primary : COLORS.gray2
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
                    touched.name ? COLORS.primary : COLORS.gray2
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

              {/* Password */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.password ? COLORS.primary : COLORS.gray2
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="Password"
                    onFocus={() => setFieldTouched("password")}
                    onBlur={() => setFieldTouched("password", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secureTextEntry={secureText}
                    style={styles.input}
                  />
                  <TouchableOpacity onPress={() => setSecureText(!secureText)}>
                    <MaterialCommunityIcons
                      name={secureText ? "eye-outline" : "eye-off-outline"}
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorMsg}>{errors.password}</Text>
                )}
              </View>

              {/* Confirm Password */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Confirm Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.confirmPassword ? COLORS.primary : COLORS.gray2
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="confirm Password"
                    onFocus={() => setFieldTouched("confirmPassword")}
                    onBlur={() => setFieldTouched("confirmPassword", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    secureTextEntry={secureText}
                    style={styles.input}
                  />
                </View>
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.errorMsg}>{errors.confirmPassword}</Text>
                )}
              </View>

              {/* Role Buttons */}

              <View style={styles.roleBtns}>
                <TouchableOpacity
                  style={[
                    styles.button,
                    selectedOption === "user" && styles.selectedButton,
                  ]}
                  onPress={() => {
                    setFieldValue("role", "owner");
                    setSelectedOption("owner");
                  }}
                >
                  <Text style={styles.buttonText}>Owner</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.button,
                    selectedOption === "seller" && styles.selectedButton,
                  ]}
                  onPress={() => {
                    setFieldValue("role", "seller");
                    setSelectedOption("seller");
                  }}
                >
                  <Text style={styles.buttonText}>Seller</Text>
                </TouchableOpacity>
              </View>

              <Button
                onPress={isValid ? handleSubmit : () => {}}
                isValid={isValid}
                btnText="Register"
                color={COLORS.primary}
              />

              <Text style={styles.errorMsg}>{responseError}</Text>

              <Text
                style={styles.registerText}
                onPress={() => navigation.navigate("Login")}
              >
                Already Have An Account?
                <Text style={styles.registerBtn}> Sign in.</Text>
              </Text>
            </View>
          )}
        </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
