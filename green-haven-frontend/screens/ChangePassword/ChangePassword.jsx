import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import { COLORS, SIZES } from "../../assets/constants";
import { Button } from "../../components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "./changePassword.styles";
import { useProfileLogic } from "../../core/hooks/editProfileLogic.hook";

import React, { useState } from "react";

const ChangePassword = () => {
  const [secureText, setSecureText] = useState(true);
  const { handleSubmit } = useProfileLogic();

  validationSchema = Yup.object({
    oldPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Old Password is required"),
    newPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("New Password is required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm New Password is required"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        onPress={Keyboard.dismiss()}
        style={styles.wrapper}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../assets/images/lock.png")}
          style={styles.image}
        />
        <Text style={styles.notes}>
          When changing your password, ensure it meets security standards by
          having a minimum length of eight characters, including a mix of
          uppercase and lowercase letters, numbers, and special characters.
          Avoid using easily guessable information.
        </Text>
        <Formik
          initialValues={{
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            await handleSubmit(values);
          }}
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
              {/* Old Password */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Old Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.oldPassword ? COLORS.primary : COLORS.gray2
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="Old Password"
                    onFocus={() => setFieldTouched("oldPassword")}
                    onBlur={() => setFieldTouched("oldPassword", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.oldPassword}
                    onChangeText={handleChange("oldPassword")}
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
                {touched.oldPassword && errors.oldPassword && (
                  <Text style={styles.errorMsg}>{errors.oldPassword}</Text>
                )}
              </View>

              {/* New Password */}

              <View style={styles.inputs}>
                <Text style={styles.label}>New Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.newPassword ? COLORS.primary : COLORS.gray2
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="New Password"
                    onFocus={() => setFieldTouched("newPassword")}
                    onBlur={() => setFieldTouched("newPassword", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.newPassword}
                    onChangeText={handleChange("newPassword")}
                    secureTextEntry={secureText}
                    style={styles.input}
                  />
                </View>
                {touched.newPassword && errors.newPassword && (
                  <Text style={styles.errorMsg}>{errors.newPassword}</Text>
                )}
              </View>

              {/* Confirm Password */}

              <View style={styles.inputs}>
                <Text style={styles.label}>Confirm New Password</Text>
                <View
                  style={styles.inputWrapper(
                    touched.confirmNewPassword ? COLORS.primary : COLORS.gray2
                  )}
                >
                  <MaterialCommunityIcons
                    name="lock-outline"
                    size={25}
                    color={COLORS.gray}
                  />
                  <TextInput
                    placeholder="Confirm New Password"
                    onFocus={() => setFieldTouched("confirmNewPassword")}
                    onBlur={() => setFieldTouched("confirmNewPassword", "")}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={values.confirmNewPassword}
                    onChangeText={handleChange("confirmNewPassword")}
                    secureTextEntry={secureText}
                    style={styles.input}
                  />
                </View>
                {touched.confirmNewPassword && errors.confirmNewPassword && (
                  <Text style={styles.errorMsg}>
                    {errors.confirmNewPassword}
                  </Text>
                )}
              </View>
              <Button
                onPress={isValid ? handleSubmit : () => {}}
                isValid={isValid}
                btnText="Save"
                color={COLORS.primary}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
