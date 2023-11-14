import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import AppButton from "../components/AppButton";
import AppCard from "../components/AppCard";
import ListingDetailsScreen from "./ListingDetailsScreen";
import { ViewImageScreen } from "./ViewImageScreen";
import Messages from "./MessagesScreen";
import AccountScreen from "./AccountScreen";
import ListingsScreen from "./ListingsScreen";
const WelcomeScreen = () => {
  return (
    <>
      {/* <SafeAreaView>
        <AppCard
          title="Jacket"
          subTitle="$200"
          imageURL={require("../assets/jacket.jpg")}
        />
      </SafeAreaView> */}
      {/* <ListingDetailsScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <Messages /> */}
      {/* <AccountScreen /> */}
      <ListingsScreen />
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Trade to Reuse!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            label="login"
            color="primary"
            onPress={() => console.log("Login")}
          />
          <AppButton
            label="register"
            color="secondary"
            onPress={() => console.log("Register")}
          />
        </View>
      </ImageBackground>
    </>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 80,
    width: 80,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
