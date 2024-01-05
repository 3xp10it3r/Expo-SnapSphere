import React from "react";
import { View } from "react-native";
import { BottomTabNavigationEnum } from "../../utils/Constants";
import {
  ActiveHome,
  ActiveMessage,
  ActiveNotification,
  ActiveProfile,
  Home,
  Message,
  Notification,
  Post,
  Profile,
} from "../../utils/icons";

const BottomTabIcon = ({
  routeName,
  isFocused,
}: {
  routeName: string;
  isFocused: boolean;
}) => {
  const renderIcon = () => {
    switch (routeName) {
      case BottomTabNavigationEnum.HOME:
        return isFocused ? <ActiveHome /> : <Home />;
      case BottomTabNavigationEnum.NOTIFICATION:
        return isFocused ? <ActiveNotification /> : <Notification />;
      case BottomTabNavigationEnum.MESSAGE:
        return isFocused ? <ActiveMessage /> : <Message />;
      case BottomTabNavigationEnum.PROFILE:
        return isFocused ? <ActiveProfile /> : <Profile />;
      case BottomTabNavigationEnum.POST:
        return <Post />;
      default:
        return null;
    }
  };

  return <View>{renderIcon()}</View>;
};

export default BottomTabIcon;
