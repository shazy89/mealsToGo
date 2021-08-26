import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import RestaurantsScreen from "./src/components/features/restaurants/screens/restaurants.screen";
export default function App() {
  return (
    <SafeAreaProvider>
      <RestaurantsScreen />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
//// rnfes
