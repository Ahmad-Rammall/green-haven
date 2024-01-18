import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { CameraButton as Button, BottomSheet } from "../../components";
import styles from "./scanner.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { SIZES } from "../../assets/constants";
import * as FileSystem from "expo-file-system";
import {
  postImage,
  getImageDetails,
} from "../../core/dataSource/remoteDataSource/scanner";
import { imagePicker } from "../../core/helpers/imagePicker";

// Modal Dep
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Scanner() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [filesPermission, setFilesPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const [modalOpen, setModalOpen] = useState(false);
  const [encodedImage, setEncodedImage] = useState("");
  const cameraRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["40%"];
  const [modalStyle, setModalStyle] = useState(styles.modalClose);
  const [plantDetails, setPlantDetails] = useState({
    plant_name: "",
    plant_description: "",
    plant_image: "",
  });

  const encodeImage = async (uri) => {
    try {
      const base64Image = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      console.log(base64Image);
      setEncodedImage(base64Image);
    } catch (error) {
      console.log("Error Encoding Image");
    }
  };

  const handlePresentModal = async () => {
    // Post Encoded Image to API
    const response = await postImage(encodedImage);
    if (response.data.result.is_plant.probability >= 0.7) {
      const details = await getImageDetails(response.data.access_token);
      const res_details = details.data.result.classification.suggestions[0];
      setPlantDetails({
        plant_name: res_details.name,
        plant_description: res_details.details.description.value,
        plant_image: image,
      });
    } else {
      setPlantDetails({
        plant_name: "",
        plant_description: "",
        plant_image: "",
      });
    }
    console.log(response);

    bottomSheetModalRef.current?.present();
    setModalOpen(true);
    setModalStyle(styles.modalOpen);
  };

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      const imagePickeStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
      setFilesPermission(imagePickeStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const pictureOptions = { width: 4, height: 3, quality: 0.5 };

        // Take Image
        const data = await cameraRef.current.takePictureAsync(pictureOptions);
        setImage(data.uri);

        // Encode Image to 64 bit
        encodeImage(data.uri);
      } catch (error) {
        console.log("-------error------------");
        console.log(error);
      }
    }
  };

  const savePicture = async () => {
    if (image) {
      try {
        const asset = await MediaLibrary.createAssetAsync(image);
        alert("Picture saved! 🎉");
        setImage(null);
        console.log("saved successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const pickImage = async () => {
    const image = await imagePicker();

    if (!image.canceled) {
      setImage(image.assets[0].uri);
      encodeImage(image.assets[0].uri);
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          ref={cameraRef}
          flashMode={flash}
        >
          <View style={{ paddingHorizontal: SIZES.small }}>
            <Button
              onPress={() =>
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                )
              }
              icon="flash"
              color={flash === Camera.Constants.FlashMode.off ? "gray" : "#fff"}
              flash
            />
          </View>
        </Camera>
      ) : (
        <>
          <Image source={{ uri: image }} style={styles.camera} />
          <GestureHandlerRootView style={modalStyle}>
            <BottomSheetModalProvider>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onDismiss={() => {
                  setModalOpen(false);
                  setModalStyle(styles.modalClose);
                }}
              >
                <BottomSheet plant={plantDetails} />
              </BottomSheetModal>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </>
      )}

      <View style={styles.controls}>
        {image ? (
          <View style={styles.resultBottomContainer}>
            <TouchableOpacity
              onPress={() => setImage(null)}
              style={styles.resultBtn}
            >
              <Text style={styles.resultBtnText}>Re-take</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handlePresentModal}
              style={styles.resultBtn}
            >
              <Text style={styles.resultBtnText}>Scan</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.bottomContainer}>
            <Button title="" icon="images" onPress={pickImage} />
            <Button title="Take a picture" onPress={takePicture} shutter />
            <Button
              title=""
              icon="retweet"
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
