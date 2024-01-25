import { StatusBar } from "expo-status-bar";
import { Image, Button } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { SafeAreaView } from "react-native";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import Screen from "./app/components/Screen";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AppButton from "./app/components/AppButton";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  handleAddUri = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  handleRemoveUri = (uri) => {
    const filteredImageUris = imageUris?.filter((imageUri) => imageUri !== uri);
    setImageUris(filteredImageUris);
  };
  return (
    <>
      <Screen>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAddUri}
          onRemoveImage={handleRemoveUri}
        />
      </Screen>
      {/* <WelcomeScreen /> */}
      {/* <SafeAreaView>
        <ViewImageScreen />
      </SafeAreaView> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {},
// });
