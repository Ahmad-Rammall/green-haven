import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./profile.styles";
import { Button } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import { ImageContainer } from "../../components";
import { useSelector } from "react-redux";
import { PUBLIC_FOLDER } from "@env";
import { local } from "../../core/helpers/localStorage";
import { STREAM_KEY } from "@env";
import { StreamChat } from "stream-chat";

const Profile = ({ navigation }) => {
  const currentUser = useSelector((state) => state.User);
  const userProfilePicture = `${process.env.PUBLIC_FOLDER}profile-pics/${currentUser.profilePicture}`;
  console.log(userProfilePicture)
  const client = StreamChat.getInstance(process.env.STREAM_KEY);
  console.log(userProfilePicture);
  const handleLogout = async () => {
    local("token", "");
    navigation.replace('Login');
    await client.disconnectUser();
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ImageContainer image={{ uri: userProfilePicture }} />
        <Text style={styles.name}>{currentUser.username}</Text>
        <Text style={styles.bio}>{currentUser.bio}</Text>

        <View style={styles.buttons}>
          <View style={styles.optionButtons}>
            <TouchableOpacity
              style={[styles.optionBtn]}
              onPress={() => navigation.navigate("Edit Profile", {userProfilePicture})}
            >
              <Text style={styles.optionTxt}>Edit Profile</Text>
              <Ionicons name="arrow-forward-outline" size={24} />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.optionBtn]}
              onPress={() => navigation.navigate("Change Password")}
            >
              <Text style={styles.optionTxt}>Change Password</Text>
              <Ionicons name="arrow-forward-outline" size={24} />
            </TouchableOpacity>
          </View>

          <Button
            btnText="Logout"
            color={COLORS.red}
            isValid={true}
            style={styles.logoutBtn}
            onPress={() => handleLogout()}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;
