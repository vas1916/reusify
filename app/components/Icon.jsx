import { View, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ size = 40, name, backgroundColor = "#000" }) => {
  return (
    <View
      style={[
        styles.iconContainer,
        { backgroundColor, width: size, height: size, borderRadius: size / 2 },
      ]}
    >
      <MaterialCommunityIcons name={name} color="white" size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Icon;
