import { StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";

import React, { useState } from "react";

const ChangePassword = () => {
  const [secureText, setSecureText] = useState(true);

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
    <View>
      <Text>ChangePassword</Text>
    </View>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({});
