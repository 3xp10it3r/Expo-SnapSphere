import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  HomeScreen,
  MessageScreen,
  NotificationScreen,
  PostScreen,
  ProfileScreen,
} from "../screens";
import MyTab from "../components/MyTab";
import { BottomTabNavigationEnum } from "../utils/Constants";

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTab {...props} />}
      initialRouteName={BottomTabNavigationEnum.HOME}
      id="2143"
    >
      <Tab.Screen
        name={BottomTabNavigationEnum.HOME}
        navigationKey={BottomTabNavigationEnum.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
        // options={{
        //   headerLeft: () => LeftHeaderTitle(),
        //   headerTitle: '',
        //   headerRight: () => RightHeader(),
        //   headerStyle: {
        //     backgroundColor: '#f0ff',
        //   },
        // }}
      />
      <Tab.Screen
        name={BottomTabNavigationEnum.NOTIFICATION}
        navigationKey={BottomTabNavigationEnum.NOTIFICATION}
        component={NotificationScreen}
      />

      <Tab.Screen
        name={BottomTabNavigationEnum.POST}
        navigationKey={BottomTabNavigationEnum.POST}
        component={PostScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={BottomTabNavigationEnum.MESSAGE}
        navigationKey={BottomTabNavigationEnum.MESSAGE}
        component={MessageScreen}
      />

      <Tab.Screen
        name={BottomTabNavigationEnum.PROFILE}
        navigationKey={BottomTabNavigationEnum.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;
