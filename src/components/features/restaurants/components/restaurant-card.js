import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { sizes } from "../../../../utils/sizes";
import { colors } from "../../../../utils/colors";
const RestaurantCard = ({ name, photos }) => {
  return (
    <Card style={styles.card} elevation={5}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white"
  },
  cover: {
    padding: sizes.lg,
    backgroundColor: colors.white
  }
});
