import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigator from "./src/routes/BottomNavigator";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });
  const [latoLoaded] = useLato({
    Lato_400Regular
  });
  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <NavigationContainer>
      <RestaurantsContextProvider>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <BottomNavigator />
          </ThemeProvider>
        </SafeAreaProvider>
      </RestaurantsContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
//// rnfes
