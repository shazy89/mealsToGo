import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COMPONENT_NAME, tabBarIcon, TAB_ICON } from "./NavigatorTab";

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  const screens = [
    { name: "Restaurants" },
    { name: "Map" },
    { name: "Settings" }
  ].map((screen, index) => (
    <Tab.Screen
      name={screen.name}
      component={COMPONENT_NAME[index]}
      options={{
        headerShown: false,
        tabBarLabel: screen.name,
        tabBarIcon: ({ color, size }) => tabBarIcon(screen.name, color, size)
      }}
    />
  ));
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63"
      }}
    >
      {screens}
    </Tab.Navigator>
  );
};

export default BottomNavigator;
