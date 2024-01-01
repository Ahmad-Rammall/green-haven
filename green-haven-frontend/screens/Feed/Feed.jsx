import { StyleSheet, Text, View } from 'react-native'
import { Post, SearchBar} from '../../components'
import React from 'react'

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
      <SearchBar placeholder="Search For Users"/>
      <Post />
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({})