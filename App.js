import { StatusBar } from "expo-status-bar";
import { Image, Button } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { SafeAreaView } from "react-native";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";
import Screen from "./app/components/Screen";
import { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import AppButton from "./app/components/AppButton";

export default function App() {
  const [imageUri, setImageUri] = useState(null);
  const getCameraPermissions = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();
    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  };
  useEffect(() => {
    getCameraPermissions();
  }, []);
  const seletctImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) setImageUri(result?.assets);
      console.log("@@@ImageURI", imageUri, result.assets);
    } catch (e) {
      console.log("Error", e);
    }
  };
  return (
    <>
      <Screen>
        <Button title="Select Image" onPress={seletctImage} />
        <Image
          source={{ uri: imageUri[0]?.uri }}
          style={{ width: 100, height: 100 }}
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
