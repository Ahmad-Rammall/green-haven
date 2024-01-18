import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Garden from "../Garden/Garden"
import styles from './home.styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Garden />
    </View>
  )
}

export default Home

