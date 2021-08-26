import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { sizes } from "../../../../utils/sizes";
const RestaurantInfo = ({
  restaurant: {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://res.cloudinary.com/dytheecsk/image/upload/v1622573155/gXQCELcnI2U_ye8u4u.jpg"
    ],
    address = "645 new york ave",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily
  }
}) => {
  return (
    <View style={styles.listItems}>
      <Text>{name}</Text>
    </View>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  listItems: {
    flex: 1,
    backgroundColor: "blue"
  }
});
