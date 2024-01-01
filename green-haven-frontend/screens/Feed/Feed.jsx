import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import { Post, SearchBar, Story } from "../../components";
import styles from "./feed.styles";
import React from "react";

const Feed = () => {
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
          <SearchBar placeholder={"Search For Users"}/>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feed;
