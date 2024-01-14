import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./post.styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { COLORS } from "../../assets/constants";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";
import { PUBLIC_FOLDER } from "@env";
import moment from "moment";

const Post = ({ post, refreshPage, handleOpenModal }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCounter, setLikeCounter] = useState(post.likes.length);
  const [commentCounter, setCommentCounter] = useState(post.comments.length);
  const [timeAgoValue, setTimeAgoValue] = useState("");
  const navigation = useNavigation();

  // get current loggedin user
  const currentUser = useSelector((state) => state.User);

  // calculate post time ago
  useEffect(() => {
    const parsedCreatedAt = moment(post.createdAt, moment.ISO_8601);
    setTimeAgoValue(parsedCreatedAt.fromNow());
  }, [post.createdAt]);

  // test if user already liked this post
  useEffect(() => {
    setIsLiked(post.likes.some((like) => like._id === currentUser._id));
  }, [post.likes]);

  const postImage = process.env.PUBLIC_FOLDER + "posts-pics/" + post.image;
  const userProfilePic =
    PUBLIC_FOLDER + "profile-pics/" + post.user.profile_picture;

  const handleLike = async () => {
    if (isLiked) {
      setLikeCounter(likeCounter - 1);
    } else {
      setLikeCounter(likeCounter + 1);
    }
    setIsLiked(!isLiked);
    await postDataSource.likePost({ postId: post._id });
  };

  // when user clicks on the post's owner profile picture
  const navigateToUserProfile = () => {
    navigation.navigate("User Profile", {
      user: post.user,
      profilePicture: userProfilePic,
      refreshPage,
    });
  };
  return (
    <View style={styles.container}>
      {/* Post Image */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: postImage }} style={styles.postImage} />
      </View>
      <Text style={styles.description}>{post.description}</Text>

      <View style={styles.bottomContainer}>
        {/* Owner Info */}
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={navigateToUserProfile}
        >
          <Image source={{ uri: userProfilePic }} style={styles.profilePic} />
          <View style={styles.profileText}>
            <Text style={styles.userName}>{post.user.name}</Text>
            <Text style={styles.time}>{timeAgoValue}</Text>
          </View>
        </TouchableOpacity>

        {/* Comment + Like Btns */}
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleOpenModal()}
          >
            <Text>{commentCounter}</Text>
            <FontAwesome name="comment-o" size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleLike()}>
            <View style={styles.button}>
              <Text>{likeCounter}</Text>
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
