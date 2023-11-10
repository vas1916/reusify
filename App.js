import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  //These dimensions will be different for screen/window in Adnroid but not in iOS
  console.log("@Window Dimensions", Dimensions.get("window"));
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Howdy React Native Sreeni's Reusify!</Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    //alignItems: "center",
    //height: "50%",
    width: Platform.OS === "ios" && "30%",
    //justifyContent: "center",
  },
});
