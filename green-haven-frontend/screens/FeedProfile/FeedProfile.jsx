import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, {useState} from "react";
import styles from "./feedPofile.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../../assets/constants";
import { Post } from "../../components";

const FeedProfile = () => {
  const route = useRoute();
  const { user, profilePicture } = route.params;
  const [followersCount, setFollowersCount] = useState(user.followers.length)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.topContainer}>
          <Image source={{ uri: profilePicture }} style={styles.image} />
          <View>
            <Text style={styles.userName}>{user.name}</Text>
            <View style={styles.buttons}>
              {/* Follow/Unfollow Button */}
              <TouchableOpacity style={[styles.followBtn, styles.btn]}>
                <Text style={styles.followTxt}>Follow</Text>
              </TouchableOpacity>

              {/* Message Button */}
              <TouchableOpacity style={[styles.messageBtn, styles.btn]}>
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
            <Text style={styles.elementNumber}>100</Text>
            <Text style={styles.elementName}>Posts</Text>
          </View>
        </View>

        <View>

        </View>
      </ScrollView>
    </View>
  );
};

export default FeedProfile;
