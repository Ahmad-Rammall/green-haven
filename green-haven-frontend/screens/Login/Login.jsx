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

  return (
    <SafeAreaView>
      <Image source={require("../../assets/images/signinImage.png")} style={styles.image} />
      
    </SafeAreaView>
  );
};

export default Login;
