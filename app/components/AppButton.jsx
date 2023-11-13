import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../config/colors";

export const AppButton = ({ label, onPress, color = "primary" }) => {
  const btnColor = {
    backgroundColor: colors[color],
  };
  return (
    <TouchableOpacity style={[styles.button, btnColor]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 8,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
