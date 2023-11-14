import { View, FlatList } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import colors from "../config/colors";
import ListItemSeperator from "../components/ListItemSeperator";
import Icon from "../components/Icon";
const menuItems = [
  {
    title: "MyListings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen>
      <ListItem
        image={require("../assets/sreeni.jpeg")}
        title="Sreenivasa Reddy"
        subTitle="hr.sreenivas16@gmail.com"
      />
      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems?.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item?.icon.name}
                  backgroundColor={item?.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          title="Logout"
          IconComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"} />}
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;
