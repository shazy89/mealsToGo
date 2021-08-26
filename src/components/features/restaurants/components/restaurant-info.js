import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { sizes } from "../../../../utils/sizes";
import RestaurantCard from "./restaurant-card";
const RestaurantInfo = ({
  restaurant: {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://res.cloudinary.com/dytheecsk/image/upload/c_scale,w_737/v1622573155/gXQCELcnI2U_ye8u4u.jpg"
    ],
    address = "645 new york ave",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  }
}) => {
  return (
    <View style={styles.listItems}>
      <RestaurantCard name={name} photos={photos} />
    </View>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  listItems: {
    flex: 1,
    backgroundColor: "blue",
    padding: sizes.md
  }
});
