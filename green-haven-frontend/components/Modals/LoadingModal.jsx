import React from 'react';
import { View, Text, Modal, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './modal.styles';
import { COLORS } from '../../assets/constants';

const LoadingModal = ({ isVisible, onClose, onDelete }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <ActivityIndicator />
      </View>
    </Modal>
  )
}

export default LoadingModal
