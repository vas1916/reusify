import { StatusBar } from "expo-status-bar";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import { SafeAreaView } from "react-native";
import { ViewImageScreen } from "./app/screens/ViewImageScreen";

export default function App() {
  return (
    <>
      <WelcomeScreen />
      {/* <SafeAreaView>
        <ViewImageScreen />
      </SafeAreaView> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {},
// });
