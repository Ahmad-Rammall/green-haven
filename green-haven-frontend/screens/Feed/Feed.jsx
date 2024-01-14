import {
  Image,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Post, SearchBar, Story, PostCreator } from "../../components";
import styles from "./feed.styles";
import React, { useEffect, useState } from "react";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";
import { usersDataSource } from "../../core/dataSource/remoteDataSource/users";
import { PUBLIC_FOLDER } from "@env";

const Feed = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [users, setUsers] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]);

  const getPosts = async () => {
    const response = await postDataSource.getPosts();
    if (response?.status === 200 || response?.status === 304) {
      setPosts(response.data[0]);
    }
  };

  const getAllUsers = async () => {
    const response = await usersDataSource.getAllUsers();
    if (response?.status === 200) {
      console.log(response.data);
      setUsers(response.data);
    }
  };

  const refreshPage = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getPosts();
    getAllUsers();
  }, [refresh]);

  useEffect(() => {
    setSearchedUsers([]);
    setSearchedUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [searchInput]);

  const navigateToUserProfile = (user) => {
    navigation.navigate("User Profile", {
      user,
      profilePicture: PUBLIC_FOLDER + "profile-pics/" + user.profile_picture,
      refreshPage,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.postsWrapper}>
          <SearchBar
            placeholder={"Search For Users"}
            setSearchInput={setSearchInput}
          />

          {/* Search Result */}
          {searchInput !== "" && (
            <ScrollView
              style={styles.searchResult}
              showsVerticalScrollIndicator={false}
            >
              {searchedUsers.map((user) => (
                <TouchableOpacity
                  style={styles.userSearchResult}
                  key={user._id}
                  onPress={() => navigateToUserProfile(user)}
                >
                  <Image
                    source={{
                      uri:
                        PUBLIC_FOLDER + "profile-pics/" + user.profile_picture,
                    }}
                    style={styles.userSearchImg}
                  />
                  <Text style={styles.userSearchName}>{user.name}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          )}

          <PostCreator refresh={refreshPage} />

          {posts ? (
            posts.map((post) => (
              <Post key={post._id} post={post} refreshPage={refreshPage} />
            ))
          ) : (
            <View style={styles.noPosts}>
              <Text style={styles.noPostsText}>No Posts</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
