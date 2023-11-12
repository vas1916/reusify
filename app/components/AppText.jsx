import { View, Text, Platform, StyleSheet } from "react-native";
import React from "react";

const AppText = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "ios" ? "Roboto" : "Avenir",
  },
});
export default AppText;
