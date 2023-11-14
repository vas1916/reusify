import { FlatList, StyleSheet } from "react-native";
import React from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/sreeni.jpeg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/sreeni.jpeg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/sreeni.jpeg"),
  },
];
const Messages = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item?.image}
            title={item?.title}
            subTitle={item?.description}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({});

export default Messages;
