import { Text, View, Image } from "react-native";
import styles from "./post.styles";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { COLORS } from "../../assets/constants";

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    console.log("xxxxxxx");
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <Text>x</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/Carousel/plant1.jpg")}
          style={styles.postImage}
        />
      </View>
      <Text style={styles.description}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae soluta
        ratione excepturi. Ipsum id harum consectetur necessitatibus, in dolore
        quis eos vero quam totam, voluptate, deserunt rerum ullam repudiandae
        neque assumenda doloremque explicabo? Incidunt modi non reprehenderit
        ullam ut quis!
      </Text>

      <View style={styles.bottomContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={require("../../assets/images/noUserImage.png")}
            style={styles.profilePic}
          />
          <View style={styles.profileText}>
            <Text style={styles.userName}>User Name</Text>
            <Text style={styles.time}>10 min ago</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          {/* <Ionicons name="heart-outline" size={30} /> */}
          <View style={styles.button}>
            <Text>100</Text>
            <FontAwesome name="comment-o" size={29} />
          </View>
          <View style={styles.button}>
            <Text>100</Text>
            {isLiked ? (
              <Ionicons
                name="heart"
                size={30}
                onPress={() => handleLike()}
                color={COLORS.red}
              />
            ) : (
              <Ionicons
                name="heart-outline"
                size={30}
                onPress={() => handleLike()}
              />
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
