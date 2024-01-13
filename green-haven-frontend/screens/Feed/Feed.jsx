import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Post, SearchBar, Story } from "../../components";
import styles from "./feed.styles";
import React, { useEffect, useState } from "react";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false)

  const getPosts = async () => {
    const response = await postDataSource.getPosts();
    console.log(response.status)
    if (response?.status === 200 || response?.status === 304) {
      setPosts(response.data[1]);
    }
  };

  const refreshPage = () => {
    setRefresh(!refresh)
  }

  useEffect(() => {
    getPosts();
  }, [refresh]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal={true}
          style={styles.stories}
          showsHorizontalScrollIndicator={false}
        >
          <Story mine image={require("../../assets/images/noUserImage.png")} />
          <Story
            image={require("../../assets/images/noUserImage.png")}
            userName="Ahmad"
          />
          <Story
            image={require("../../assets/images/noUserImage.png")}
            userName="Ahmad"
          />
          <Story
            image={require("../../assets/images/noUserImage.png")}
            userName="Ahmad"
          />
          <Story
            image={require("../../assets/images/noUserImage.png")}
            userName="Ahmad"
          />
          <Story
            image={require("../../assets/images/noUserImage.png")}
            userName="Ahmad"
          />
          <Story
            image={require("../../assets/images/noUserImage.png")}
            userName="Ahmad"
          />
        </ScrollView>
        <View style={styles.postsWrapper}>
          <SearchBar placeholder={"Search For Users"} />

          {posts ? (
            posts.map((post) => <Post key={post._id} post={post} refreshPage={refreshPage}/>)
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
