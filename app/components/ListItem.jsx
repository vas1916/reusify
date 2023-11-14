import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({ image, title, subTitle, IconComponent }) => {
  return (
    <View style={styles.listingContainer}>
      {IconComponent}
      {image && <Image style={styles.image} source={image} />}
      <View style={styles.container}>
        {title && <AppText style={styles.title}>{title}</AppText>}
        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  listingContainer: {
    flexDirection: "row",
    marginVertical: 10,
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
