import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.box1}>
          <Text>Box 1</Text>
        </View>
        <View style={styles.box2}>
          <Text>Box 2</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start"
  },
  box1: {
    flex: 0.1,
    backgroundColor: "green"
  },
  box2: {
    flex: 1,
    backgroundColor: "red"
  }
});
