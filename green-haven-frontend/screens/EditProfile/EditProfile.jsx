import { Text, View, TextInput, ScrollView } from "react-native";
import { ImageContainer, Button } from "../../components";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import styles from "./editProfile.styles";
import React, { useState } from "react";
import { useProfileLogic } from "../../core/hooks/editProfileLogic.hook";
import {useRoute} from "@react-navigation/native"

const EditProfile = () => {
  const { error, handleFormChange, handleSubmit, credentials } =
    useProfileLogic();

    // get user profile pic
    const route = useRoute();
    const userProfilePicture = route.params.userProfilePicture

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <ImageContainer edit handleFormChange={handleFormChange} image={userProfilePicture}/>

        <View style={styles.inputs}>
          {/* Email */}
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="email-outline"
              size={25}
              color={COLORS.gray}
            />
            <TextInput
              value={credentials.email}
              style={styles.input}
              editable={false}
            />
          </View>

          {/* Name */}
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={25} color={COLORS.gray} />
            <TextInput
              placeholder="Full Name"
              value={credentials.name}
              style={styles.input}
              onChangeText={(text) => {
                handleFormChange("name", text);
              }}
            />
            {credentials.name === "" ? (
              <Text style={styles.error}>Required</Text>
            ) : (
              ""
            )}
          </View>

          {/* Phone Number */}
          <View style={styles.inputWrapper}>
            <Ionicons name="phone-portrait-outline" size={24} color="black" />
            <TextInput
              placeholder="Phone Number"
              value={credentials.phone}
              style={styles.input}
              onChangeText={(text) => handleFormChange("phone", text)}
              keyboardType="numeric"
            />
          </View>

          {/* Location */}
          <View style={styles.inputWrapper}>
            <Ionicons
              name="location-outline"
              size={25}
              color={COLORS.gray}
            />
            <TextInput
              placeholder="Location"
              value={credentials.location}
              style={styles.input}
              onChangeText={(text) => handleFormChange("location", text)}
            />
          </View>

          {/* Bio */}
          <View style={styles.inputWrapper} keyboardShouldPersistTaps="handled">
            <MaterialCommunityIcons
              name="clipboard-text-outline"
              size={25}
              color={COLORS.gray}
            />
            <TextInput
              placeholder="Bio"
              value={credentials.bio}
              style={styles.input}
              onChangeText={(text) => handleFormChange("bio", text)}
            />
          </View>
        </View>
        <View style={styles.btn}>
          <Button
            btnText="Save"
            isValid={credentials.name === "" ? false : true}
            onPress={() => handleSubmit()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;
