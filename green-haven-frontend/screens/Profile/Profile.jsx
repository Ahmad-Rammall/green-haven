import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./profile.styles";
import { Button } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import { ProfilePicture } from "../../components"

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ProfilePicture image={require("../../assets/images/Carousel/plant1.jpg")} />
        <Text style={styles.name}>Ahmad Rammal</Text>
        <Text style={styles.bio}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          reprehenderit odit ipsum nam neque doloribus suscipit esse! Quis,
          quisquam inventore?
        </Text>

        <View style={styles.optionButtons}>
          <TouchableOpacity style={styles.optionBtn} onPress={() => navigation.navigate("Edit Profile")}>
            <Text style={styles.optionTxt}>Edit Profile</Text>
            <Ionicons name="arrow-forward-outline" size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionTxt}>Change Password</Text>
            <Ionicons name="arrow-forward-outline" size={24} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionBtn}>
            <Text style={styles.optionTxt}>Liked Posts</Text>
            <Ionicons name="arrow-forward-outline" size={24} />
          </TouchableOpacity>
        </View>

        <Button
          btnText="Logout"
          color={COLORS.red}
          isValid={true}
          style={styles.logoutBtn}
        />
      </View>
    </View>
  );
};

export default Profile;
