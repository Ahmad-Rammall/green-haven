import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import styles from "./comment.styles";
import { PUBLIC_FOLDER } from "@env";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";
import { useSelector } from "react-redux";

const Comment = ({ comment, postId, refreshPage }) => {
  const currentUser = useSelector((state) => state.User);
  const [isLiked, setIsLiked] = useState(
    comment.likes.some((like) => String(like._id) === String(currentUser._id))
  );
  const [commentLikeCount, setCommentLikeCount] = useState(
    comment.likes.length
  );

  const image = PUBLIC_FOLDER + "profile-pics/" + comment.user.profile_picture;

  const handleLike = async () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      setCommentLikeCount((prev) => prev + 1);
    } else {
      setCommentLikeCount((prev) => prev - 1);
    }
    const response = await postDataSource.handleLikeComment({
      postId,
      commentId: comment._id,
    });
    if (response?.status === 200) {
      refreshPage();
    }
  };

  return (
    <View style={styles.commentContainer}>
      <Image source={{ uri: image }} style={styles.userImage} />
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{comment.user.name}</Text>
        <Text style={styles.commentText}>{comment.text}</Text>
      </View>
      <TouchableOpacity onPress={() => handleLike()}>
        <View style={styles.likeButton}>
          <Text style={styles.likeCounter}>{commentLikeCount}</Text>
          {isLiked ? (
            <Ionicons name="heart" size={20} color={COLORS.red} />
          ) : (
            <Ionicons name="heart-outline" size={20} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Comment;
