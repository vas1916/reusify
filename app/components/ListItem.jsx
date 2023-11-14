import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, title, subTitle }) => {
  return (
    <View style={styles.listingContainer}>
      <Image style={styles.image} source={image} />
      <View>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  listingContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: colors.medium,
  },
});
export default ListItem;
