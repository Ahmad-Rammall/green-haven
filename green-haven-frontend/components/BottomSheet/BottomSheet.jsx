import { StyleSheet, Text, View } from 'react-native'
import "react-native-gesture-handler";
import {BottomSheetModal } from "@gorhom/bottom-sheet"
import React from 'react'

const BottomSheet = () => {
  return (
    <BottomSheetModal>
      <Text>BottomSheet</Text>
    </BottomSheetModal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({})