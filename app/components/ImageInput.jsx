import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ imageUri, onChangeImage }) => {
  const getCameraPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  };
  useEffect(() => {
    getCameraPermissions();
  }, []);

  const handleOnImagePress = () => {
    if (!imageUri) {
      seletctImage();
    } else {
      Alert.alert("Delete", "Are you sure to delete this image?", [
        {
          text: "Yes",
          onPress: () => onChangeImage(imageUri),
        },
        {
          text: "No",
        },
      ]);
    }
  };

  const seletctImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result?.canceled) {
        const asset = result?.assets?.find((asset) => asset?.uri);
        //console.log("#####FINDURIS", asset);
        //console.log("@@@@ImgURIS", result?.assets);
        onChangeImage(asset?.uri);
      }
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleOnImagePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.imag} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    height: 100,
    width: 100,
    overflow: "hidden",
    borderRadius: 15,
    justifyContent: "center",
  },
  imag: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
