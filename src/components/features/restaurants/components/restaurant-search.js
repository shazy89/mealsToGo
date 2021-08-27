import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Search from "../../../Search";

const RestaurantSearch = () => {
  return (
    <View style={styles.searchBar}>
      <Search />
    </View>
  );
};

export default RestaurantSearch;

const styles = StyleSheet.create({
  searchBar: {
    alignSelf: "center"
  }
});
