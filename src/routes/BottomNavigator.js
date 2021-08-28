import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsScreen from "../components/features/restaurants/screens/restaurants.screen";
import Map from "../components/features/restaurants/screens/map.screen";
import { Text } from "../components/typography/text.component";
import { SafeArea } from "../components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Restaurants"
        component={RestaurantsScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Restaurants",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-restaurant" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          headerShown: false,
          tabBarLabel: "Map",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="Map" color={color} size={size} />
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
