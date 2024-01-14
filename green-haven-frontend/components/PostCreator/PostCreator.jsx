import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { PUBLIC_FOLDER } from "@env";
import { imagePicker } from "../../core/helpers/imagePicker";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./postCreator.styles";

const PostCreator = () => {
  const currentUser = useSelector((state) => state.User);
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const pickImage = async () => {
    const image = await imagePicker();
    setSelectedImage(image.assets[0].uri);
  };

  const profilePic =
    PUBLIC_FOLDER + "profile-pics/" + currentUser.profilePicture;

  return (
    <View style={styles.share}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
          <TextInput
            style={styles.input}
            placeholder={`What's on your mind ${currentUser.username}?`}
            onChangeText={(text) => setInputText(text)}
            value={inputText}
          />
        </View>

        <View style={styles.selectedImgContainer}>
          {selectedImage && (
            <View>
              <Image
                source={{ uri: selectedImage }}
                style={styles.selectedImg}
              />
              <MaterialIcons
                name="highlight-remove"
                size={24}
                color="black"
                style={styles.removeIcon}
                onPress={() => setSelectedImage("")}
              />
            </View>
          )}
        </View>
        <View style={styles.hr} />
        <View style={styles.bottom}>
          <View style={styles.left}>
            <TouchableOpacity onPress={pickImage}>
              <View style={styles.item}>
                <Image
                  source={require("../../assets/images/img.png")}
                  style={styles.imageIcon}
                />
                <Text>Add Image</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.right}>
            <TouchableOpacity>
              <Text style={styles.shareButton}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};



export default PostCreator;