import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/constants";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ProfilePicture = ({ image, edit }) => {
  return (
    <View>
      {edit ? (
        <TouchableOpacity>
          <Image source={image} style={styles.image} />
          <Ionicons name="camera-outline" size={22} style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <View>
          <Image source={image} style={styles.image} />
        </View>
      )}
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  imageContainer: {},
  image: {
    borderWidth: 4,
    borderColor: COLORS.primary,
    borderRadius: 100,
    width: 150,
    height: 150,
    alignSelf: "center",
    resizeMode: "cover",
    position: "relative",
  },
  icon: {
    position: "absolute",
    alignSelf: "center",
    top: "85%",
    backgroundColor: COLORS.primary,
    borderRadius: 200,
    padding: 5,
    color: COLORS.offwhite,
  },
});
