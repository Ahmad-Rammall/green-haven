import { Text, Image, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { Button } from "../../components";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./login.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [secureText, setSecureText] = useState(true);

  validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Must be 6 characters or above")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  return (
    <SafeAreaView>
      <Image
        source={require("../../assets/images/signinImage.png")}
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

            <View style={styles.inputs}>
              <Text style={styles.label}>Password</Text>
              <View
                style={styles.inputWrapper(touched.password ? COLORS.primary : COLORS.white)}
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
            
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default Login;
