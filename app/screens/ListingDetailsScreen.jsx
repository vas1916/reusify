import { View, Image, StyleSheet } from "react-native";
import React from "react";

import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$200</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/sreeni.jpeg")}
          title="Sreenivasa Reddy"
          subTitle="6 Listings"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: "bold",
  },
  userContainer: {
    marginVertical: 40,
  },
});
export default ListingDetailsScreen;
