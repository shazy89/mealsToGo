import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components";

import { sizes } from "../../../../utils/sizes";
import { colors } from "../../../../utils/colors";

const Title = styled.Text`
  padding: ${sizes.sm}px;
  color: red;
`;

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
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  listItems: {
    flex: 1,
    backgroundColor: "blue",
    padding: sizes.md
  },
  card: {
    backgroundColor: "white"
  },
  cover: {
    padding: sizes.lg,
    backgroundColor: colors.white
  }
});
