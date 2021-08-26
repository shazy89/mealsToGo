import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components";

import { sizes } from "../../../../utils/sizes";
import { colors } from "../../../../utils/colors";

const Title = styled.Text`
  padding: ${(props) => props.theme.sizes[1]};
  color: ${(props) => props.theme.colors.ui.error};
  font-family: ${(props) => props.theme.fonts.body};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurandCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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
    <RestaurantCard elevation={5}>
      <RestaurandCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
