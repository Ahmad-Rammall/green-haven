import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../assets/constants";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { imagePicker } from "../../core/helpers/imagePicker";
import { PUBLIC_FOLDER } from "@env";
import { useSelector } from "react-redux";

const ProfilePicture = ({ image, edit, handleFormChange }) => {
  const [profilePic, setProfilePic] = useState({});
  const currentUser = useSelector((state) => state.User);

  // Pick Image from Device
  const pickImage = async () => {
    const result = await imagePicker();
    setProfilePic(result.assets[0].uri);
    handleFormChange("profilePic", result.assets[0]);
  };

  const imagePath =
    PUBLIC_FOLDER + "profile-pics/" + currentUser.profilePicture;
  return (
    <View>
      {edit ? (
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={
              Object.keys(profilePic).length !== 0
                ? { uri: profilePic }
                : { uri: imagePath }
            }
            style={styles.image}
          />
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
