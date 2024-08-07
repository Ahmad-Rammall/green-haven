import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { PUBLIC_FOLDER } from "@env";
import { imagePicker } from "../../core/helpers/imagePicker";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./postCreator.styles";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";
import Toast from "react-native-simple-toast";
PUBLIC_FOLDER

const PostCreator = ({ refresh }) => {
  const currentUser = useSelector((state) => state.User);
  const [description, setDescription] = useState("");
  const [selectedImage, setSelectedImage] = useState("");

  const pickImage = async () => {
    const image = await imagePicker();
    setSelectedImage(image.assets[0].uri);
  };

  const createPost = async () => {
    const data = new FormData();
    data.append("description", description);
    console.log(selectedImage);
    data.append("file", {
      uri: selectedImage,
      type: "image/jpeg",
      name: "post.jpg",
    });
    const response = await postDataSource.createPost(data);
    if (response?.status === 200) {
      Toast.show("Post Created !", Toast.LONG);
      setSelectedImage("");
      setDescription("");
      refresh();
    }
  };

  const profilePic =
  process.env.PUBLIC_FOLDER + "profile-pics/" + currentUser.profilePicture;

  return (
    <View style={styles.share}>
      <View style={styles.container}>
        <View style={styles.top}>
          <Image source={{ uri: profilePic }} style={styles.profilePic} />
          <TextInput
            style={styles.input}
            placeholder={`What's on your mind ${currentUser.username?.split(" ")[0]}?`}
            onChangeText={(text) => setDescription(text)}
            value={description}
          />
        </View>

        {selectedImage && (
          <View style={styles.selectedImgContainer}>
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
            <TouchableOpacity onPress={() => createPost()}>
              <Text style={styles.shareButton}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCreator;
