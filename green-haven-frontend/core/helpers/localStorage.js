import AsyncStorage from '@react-native-async-storage/async-storage';

export const local = async (key, value) => {
    if (value !== undefined) {
      await AsyncStorage.setItem(key, value);
    } else {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? value : null;
    }
  };