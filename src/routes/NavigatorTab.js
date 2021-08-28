import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsScreen from "../components/features/restaurants/screens/restaurants.screen";
import { View, Text } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "map",
  Settings: "settings"
};
const TAB_NAME = {
  0: "Restaurants",
  1: "Map",
  2: "Settings"
};

const tabBarIcon = (tabIcon, color, size) => (
  <Ionicons name={TAB_ICON[tabIcon]} color={color} size={size} />
);

export const NavigatorTab = ({ component, name, tabIcon, tabName }) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Screen
      name={name}
      component={component}
      options={{
        headerShown: false,
        tabBarLabel: name,
        tabBarIcon: ({ color, size }) => tabBarIcon(tabIcon, color, size)
      }}
    />
  );
};
