import { Text, View, TextInput, ScrollView } from "react-native";
import { ProfilePicture, Button } from "../../components";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import styles from "./editProfile.styles";
import React, { useState } from "react";
import { useProfileLogic } from "../../core/hooks/editProfileLogic.hook";

const EditProfile = ({ navigation }) => {
  const [name, setName] = useState("");

  const { error, handleFormChange, handleSubmit, credentials } = useProfileLogic();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ProfilePicture
        edit
        image={require("../../assets/images/Carousel/plant1.jpg")}
      />

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
              setName(text);
              handleFormChange("name", text);
            }}
          />
          {credentials.name === "" ? <Text style={styles.error}>Required</Text> : ""}
        </View>

        {/* Phone Number */}
        <View style={styles.inputWrapper}>
          <Ionicons name="phone-portrait-outline" size={24} color="black" />
          <TextInput
            placeholder="Phone Number"
            value={credentials.phone}
            style={styles.input}
            onChangeText={(text) => handleFormChange("phone", text)}
            keyboardType={Platform.OS === 'android' ? "numeric" : "number-pad"}
          />
        </View>

        {/* Location */}
        <View style={styles.inputWrapper}>
          <Ionicons name="ios-location-outline" size={25} color={COLORS.gray} />
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
  );
};

export default EditProfile;
