import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsScreen from "../components/features/restaurants/screens/restaurants.screen";
import Map from "../components/features/restaurants/screens/map.screen";
import { Settings } from "../components/features/restaurants/screens/settings.screen";
import { Text } from "../components/typography/text.component";
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

const tabBarIcon = (color, size) => (
  <Ionicons name={TAB_ICON.Restaurants} color={color} size={size} />
);

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#e91e63"
      }}
    >
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color, size }) => tabBarIcon(color, size)
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="map" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarLabel: "Sttings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
