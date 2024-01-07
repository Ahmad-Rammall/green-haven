import * as ImagePicker from "expo-image-picker";

export const imagePicker = async () => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    return result;
  } catch (error) {
    console.error("Error picking image: ", error);
  }
};
