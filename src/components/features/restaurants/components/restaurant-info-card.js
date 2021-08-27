import React from "react";
import { View, Text } from "react-native";
import { Avatar, Button, Card, Paragraph } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import Spacer from "../../../spacer/spacer.component";
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  font-weight: ${(props) => props.theme.fontWeights.bold};

  color: ${(props) => props.theme.colors.ui.error};
`;
const Adress = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurandCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;
const Row = styled(View)`
  flex-direction: row;
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
    rating = 3,
    isClosedTemporarily
  }
}) => {
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5} style={{ marginTop: 20, width: "90%" }}>
      <RestaurandCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>

        <Row>
          {ratingArray.map((x, index) => (
            <SvgXml key={index} xml={star} width={20} height={20} />
          ))}
        </Row>
        <Adress>{address}</Adress>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
