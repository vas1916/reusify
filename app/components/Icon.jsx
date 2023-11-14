import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

const Icon = ({ name, backgroundColor }) => {
  return (
    <View style={[styles.iconContainer, { backgroundColor: backgroundColor }]}>
      <MaterialCommunityIcons name={name} color="white" size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icon;
