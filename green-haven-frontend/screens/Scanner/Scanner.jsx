import "react-native-gesture-handler";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { CameraButton as Button, BottomSheet } from "../../components";
import styles from "./scanner.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { SIZES } from "../../assets/constants";

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
  const cameraRef = useRef(null);
  const bottomSheetModalRef = useRef(null);
  const snapPoints = ["50%"];
  const [modalStyle, setModalStyle] = useState(styles.modalClose) 

  const handlePresentModal = () => {
    bottomSheetModalRef.current?.present();
    setModalOpen(true);
    setModalStyle(styles.modalOpen)
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
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (error) {
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
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error("Error picking image: ", error);
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
          <GestureHandlerRootView
            style={modalStyle}
          >
            <BottomSheetModalProvider>
              <BottomSheetModal
                ref={bottomSheetModalRef}
                index={0}
                snapPoints={snapPoints}
                onDismiss={() => {setModalOpen(false); setModalStyle(styles.modalClose)}}
              >
                <BottomSheet />
              </BottomSheetModal>
            </BottomSheetModalProvider>
          </GestureHandlerRootView>
        </>
      )}

      <View style={styles.controls}>
        {image ? (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 50,
            }}
          >
            <Button
              title="Re-take"
              onPress={() => setImage(null)}
              icon="retweet"
            />
            <Button title="Save" onPress={handlePresentModal} icon="check" />
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
