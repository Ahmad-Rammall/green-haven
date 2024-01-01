import { StyleSheet, Text, View } from 'react-native'
import { Post, SearchBar} from '../../components'
import styles from "./feed.styles"
import React from 'react'

const Feed = () => {
  return (
    <View>
      <View style={styles.stories}>
        <Text>x</Text>
      </View>
      <SearchBar placeholder="Search For Users"/>
      <Post />
    </View>
  )
}

export default Feed
