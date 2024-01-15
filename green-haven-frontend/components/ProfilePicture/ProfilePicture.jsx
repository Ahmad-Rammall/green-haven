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
        <TouchableOpacity onPress={pickImage} style={styles.imageContainer}>
          <Image
            source={
              Object.keys(profilePic).length !== 0
                ? { uri: profilePic }
                : { uri: imagePath }
            }
            style={styles.image}
          />
          <View style={styles.icon}>
            <Ionicons name="camera-outline" size={20} color={COLORS.offwhite}/>
          </View>
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
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 999,
    width: 150,
    height: 150,
    alignSelf: "center",
    resizeMode: "cover",
    position: "relative",
  },
  icon: {
    width: 35,
    height: 35,
    position: "absolute",
    bottom: -10,
    backgroundColor: COLORS.primary,
    borderRadius: 999,
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
