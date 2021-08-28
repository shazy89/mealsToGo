import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Restaurants from "../components/features/restaurants/screens/restaurants.screen";
import Map from "../components/features/restaurants/screens/map.screen";
import { Settings } from "../components/features/restaurants/screens/settings.screen";
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "map",
  Settings: "settings"
};
export const COMPONENT_NAME = {
  0: Restaurants,
  1: Map,
  2: Settings
};

export const tabBarIcon = (tabIcon, color, size) => (
  <Ionicons name={TAB_ICON[tabIcon]} color={color} size={size} />
);
