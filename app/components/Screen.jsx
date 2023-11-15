import { SafeAreaView, View, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}
      {/* <View style={style}> </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
export default Screen;
