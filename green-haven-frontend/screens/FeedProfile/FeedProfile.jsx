import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import styles from "./feedPofile.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../../assets/constants";
import { Post } from "../../components";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";
import { profileDataSource } from "../../core/dataSource/remoteDataSource/profile";
import { useSelector } from "react-redux";
import { STREAM_KEY } from "@env";
import { StreamChat } from "stream-chat";

const FeedProfile = () => {
  const route = useRoute();
  const { user, profilePicture, refreshPage } = route.params;
  const currentUser = useSelector((state) => state.User);
  const [followersCount, setFollowersCount] = useState(user.followers.length);
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(
    user.followers.includes(String(currentUser._id))
  );
  const [posts, setPosts] = useState([]);

  // get client instance
  const client = StreamChat.getInstance(STREAM_KEY);

  const createNewChannel = async () => {
    if (user._id !== currentUser._id) {
      const channel = client.channel("messaging", {
        members: [user._id.toString(), currentUser._id.toString()],
      });
      await channel.watch();
      navigation.navigate("Chat", { channelId: channel.id });
    } else {
      console.log("Error: user._id and currentUser._id are the same.");
    }
  };

  const getUserPosts = async () => {
    const userId = user._id;
    const response = await postDataSource.getUserPosts(userId);
    if (response?.status === 200) {
      setPosts(response.data);
    } else {
      console.log("error");
    }
  };

  const handleFollow = async () => {
    if (isFollowing) {
      setFollowersCount(followersCount - 1);
    } else {
      setFollowersCount(followersCount + 1);
    }
    setIsFollowing(!isFollowing);
    const response = await profileDataSource.handleFollowUser({
      otherUserId: user._id,
    });
    if (response?.status === 200) {
      refreshPage();
    }
  };

  useEffect(() => {
    getUserPosts();
  }, [user]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.topContainer}>
          <Image source={{ uri: profilePicture }} style={styles.image} />
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <View style={styles.buttons}>
              {/* Follow/Unfollow Button */}

              {isFollowing ? (
                <TouchableOpacity
                  style={[styles.followBtn(COLORS.red), styles.btn]}
                  onPress={() => handleFollow()}
                >
                  <Text style={styles.followTxt}>Unfollow</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={[styles.followBtn(COLORS.primary), styles.btn]}
                  onPress={() => handleFollow()}
                >
                  <Text style={styles.followTxt}>Follow</Text>
                </TouchableOpacity>
              )}

              {/* Message Button */}
              <TouchableOpacity
                style={[styles.messageBtn, styles.btn]}
                onPress={() => createNewChannel()}
              >
                <Ionicons
                  name="paper-plane-outline"
                  size={24}
                  color={COLORS.offwhite}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Bottom Container */}

        <View style={styles.bottomContainer}>
          <View style={styles.bottomElement}>
            <Text style={styles.elementNumber}>{followersCount}</Text>
            <Text style={styles.elementName}>Followers</Text>
          </View>

          <View style={styles.bottomElement}>
            <Text style={styles.elementNumber}>{user.following.length}</Text>
            <Text style={styles.elementName}>Following</Text>
          </View>

          <View style={styles.bottomElement}>
            <Text style={styles.elementNumber}>
              {posts ? posts?.length : "0"}
            </Text>
            <Text style={styles.elementName}>Posts</Text>
          </View>
        </View>

        <View>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedProfile;
