import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/constants";
import styles from "./comment.styles";

const Comment = ({ userImage, userName, commentText }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.commentContainer}>
      <Image source={userImage} style={styles.userImage} />
      <View style={styles.commentContent}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.commentText}>{commentText}</Text>
      </View>
      <TouchableOpacity onPress={() => handleLike()}>
        <View style={styles.likeButton}>
          <Text style={styles.likeCounter}>20</Text>
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
