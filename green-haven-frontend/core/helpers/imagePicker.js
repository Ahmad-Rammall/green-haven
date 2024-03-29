import * as ImagePicker from "expo-image-picker";

export const imagePicker = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      return result;
    }
  } catch (error) {
    console.error("Error picking image: ", error);
  }
};
