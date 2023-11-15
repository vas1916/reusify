import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React from "react";

const AppSwipeable = ({ children, renderRightActions }) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable>
    </GestureHandlerRootView>
  );
};

export default AppSwipeable;
