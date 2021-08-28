import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RestaurantsScreen from "../components/features/restaurants/screens/restaurants.screen";
import Home from "../components/features/restaurants/screens/home.screen";
import { Text } from "../components/typography/text.component";
import { SafeArea } from "../components/utility/safe-area.component";
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
