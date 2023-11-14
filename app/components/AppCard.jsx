import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppText from "./AppText";

const AppCard = ({ title, subTitle, imageURL }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} source={imageURL} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 15,
    backgroundColor: colors.light,
    marginHorizontal: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 10,
  },
});

export default AppCard;
