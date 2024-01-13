import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./post.styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { COLORS } from "../../assets/constants";
import { useNavigation } from "@react-navigation/native";
import {PUBLIC_FOLDER} from "@env";
import {format} from "timeago.js"

const Post = ({ description, userName, userImage, post }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigation = useNavigation();

  const postImage = PUBLIC_FOLDER + "posts-pics/" + post.image
  const userProfilePic = PUBLIC_FOLDER + "profile-pics/" + post.user.profile_picture


  const handleLike = () => {
    console.log("xxxxxxx");
    setIsLiked(!isLiked);
  };

  const navigateToUserProfile = () => {
    navigation.navigate("User Profile", {
      postImage,
      description,
      userName,
      userImage,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: postImage }} style={styles.postImage} />
      </View>
      <Text style={styles.description}>{post.description}</Text>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={navigateToUserProfile}
        >
          <Image source={{ uri: userProfilePic }} style={styles.profilePic} />
          <View style={styles.profileText}>
            <Text style={styles.userName}>{post.user.name}</Text>
            <Text style={styles.time}>{format(post.createdAt)}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Text>{post.comments.length}</Text>
            <FontAwesome name="comment-o" size={30} />
          </View>
          <TouchableOpacity onPress={() => handleLike()}>
            <View style={styles.button}>
              <Text>{post.likes.length}</Text>
              {isLiked ? (
                <Ionicons name="heart" size={30} color={COLORS.red} />
              ) : (
                <Ionicons name="heart-outline" size={30} />
              )}
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Post;
