import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styles from "./feedPofile.styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS } from "../../assets/constants";
import { Post } from "../../components";

const FeedProfile = () => {
  const route = useRoute();
  const { userImage, userName, description, postImage } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <View style={styles.topContainer}>
          <Image source={userImage} style={styles.image} />
          <View>
            <Text style={styles.userName}>{userName}</Text>
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
            <Text style={styles.elementNumber}>100</Text>
            <Text style={styles.elementName}>Followers</Text>
          </View>

          <View style={styles.bottomElement}>
            <Text style={styles.elementNumber}>100</Text>
            <Text style={styles.elementName}>Followers</Text>
          </View>

          <View style={styles.bottomElement}>
            <Text style={styles.elementNumber}>100</Text>
            <Text style={styles.elementName}>Followers</Text>
          </View>
        </View>

        <View>
          <Post
            postImage={postImage}
            userImage={userImage}
            description={description}
            userName={userName}
          />
          <Post
            postImage={postImage}
            userImage={userImage}
            description={description}
            userName={userName}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedProfile;
