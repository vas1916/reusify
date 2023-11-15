import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
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
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [isRefresh, setIsRefresh] = useState(false);
  const onListItemClick = (item) => {
    console.log("@ItemPressed", item);
  };
  const onDeleteAction = (item) => {
    console.log("@@Item", item);
    const notDeletedMessages = messages.filter(
      (message) => message.id !== item.id
    );
    setMessages(notDeletedMessages);
  };

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
            onPress={() => onListItemClick(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => onDeleteAction(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={isRefresh}
        onRefresh={() =>
          setMessages([
            ...initialMessages,
            {
              id: 3,
              title: "T3",
              description: "D3",
              image: require("../assets/sreeni.jpeg"),
            },
          ])
        }
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.medium,
  },
});

export default MessagesScreen;
