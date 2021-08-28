import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Restaurants from "../components/features/restaurants/screens/restaurants.screen";
import Map from "../components/features/restaurants/screens/map.screen";
import { Settings } from "../components/features/restaurants/screens/settings.screen";
import { Text } from "../components/typography/text.component";
import { SafeArea } from "../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
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
// <Tab.Screen
// name="Restaurants"
// component={Restaurants}
// options={{
//   headerShown: false,
//   tabBarLabel: "Restaurants",
//   tabBarIcon: ({ color, size }) =>
//     tabBarIcon("Restaurants", color, size)
// }}
// />
// <Tab.Screen
// name="Map"
// component={Map}
// options={{
//   headerShown: false,
//   tabBarLabel: "Map",
//   tabBarIcon: ({ color, size }) => tabBarIcon("Map", color, size)
// }}
// />
// <Tab.Screen
// name="Settings"
// component={Settings}
// options={{
//   headerShown: false,
//   tabBarLabel: "Sttings",
//   tabBarIcon: ({ color, size }) => tabBarIcon("Settings", color, size)
// }}
// />
