import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";

const AppText = ({ children, style }) => {
  return (
    <View>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    // to solve the duplication of using Platform.OS --> use Platform.select({})
    // fontSize: Platform.OS === "ios" ? 18 : 20,
    // fontFamily: Platform.OS === "ios" ? "Roboto" : "Avenir",
    // spread the object returned by Platform.select
    ...Platform.select({
      iso: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});
export default AppText;
