import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
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
    <SafeAreaView style={styles.screen}>
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
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Messages;
