import { View, StyleSheet } from "react-native";
import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const ListItemDeleteAction = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback style={styles.rightAction} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  rightAction: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.danger,
    width: 60,
  },
});
export default ListItemDeleteAction;
