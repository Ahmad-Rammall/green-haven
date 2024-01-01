import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Post, SearchBar, Story } from "../../components";
import styles from "./feed.styles";
import React from "react";

const Feed = () => {
  const desc =
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae soluta ratione excepturi. Ipsum id harum consectetur necessitatibus, in dolorequis eos vero quam totam, voluptate, deserunt rerum ullam repudiandaeneque assumenda doloremque explicabo? Incidunt modi non reprehenderitullam ut quis!";
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
          <Post
            userImage={require("../../assets/images/noUserImage.png")}
            postImage={require("../../assets/images/Carousel/plant1.jpg")}
            description={desc}
            userName="Ahmad"
          />
          <Post
            userImage={require("../../assets/images/noUserImage.png")}
            postImage={require("../../assets/images/Carousel/plant2.jpg")}
            description={desc}
            userName="Ahmad"
          />
          <Post
            userImage={require("../../assets/images/noUserImage.png")}
            postImage={require("../../assets/images/Carousel/plant3.jpg")}
            description={desc}
            userName="Ahmad"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
