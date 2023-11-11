import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  //These dimensions will be different for screen/window in Adnroid but not in iOS
  //console.log("@Window Dimensions", Dimensions.get("window"));
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text numberOfLines={1}>
          Howdy React Native Sreeni's Reusify!Consequat nulla irure id esse
          consequat veniam proident do do do ad cupidatat.
        </Text>
        <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
          <Image source={require("./assets/favicon.png")} />
        </TouchableWithoutFeedback>
        <Image
          source={{
            width: 300,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
        <Button title="click Me" onPress={handleClick} />
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
    width: Platform.OS === "ios" && "100%",
    //justifyContent: "center",
  },
});
