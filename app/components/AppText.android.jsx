import { View, Text, StyleSheet } from "react-native";
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
    color: "gold",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});
export default AppText;