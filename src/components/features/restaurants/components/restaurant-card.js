import React from "react";
import { StyleSheet, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { sizes } from "../../../../utils/sizes";

const RestaurantCard = ({ name, photos }) => {
  return (
    <Card style={styles.container}>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  container: {
    padding: sizes.lg
  }
});
