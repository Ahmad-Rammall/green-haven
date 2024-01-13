import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Post, SearchBar, Story } from "../../components";
import styles from "./feed.styles";
import React, { useEffect, useState } from "react";
import { postDataSource } from "../../core/dataSource/remoteDataSource/post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const desc =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae soluta ratione excepturi. Ipsum id harum consectetur necessitatibus, in dolorequis eos vero quam totam, voluptate, deserunt rerum ullam repudiandaeneque assumenda doloremque explicabo? Incidunt modi non reprehenderitullam ut quis!";

  const getPosts = async () => {
    const response = await postDataSource.getPosts();
    setPosts(response.data[0]);
  };

  useEffect(() => {
    getPosts();
  }, []);
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

          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
