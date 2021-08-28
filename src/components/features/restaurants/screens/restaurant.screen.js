import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";

const RestaurantScreen = styled.View`
  flex: 1;
  justify-content: center;
`;

const Restaurant = () => {
  return (
    <RestaurantScreen style={{}}>
      <Text>Hi From the restaurant screen</Text>
    </RestaurantScreen>
  );
};

export default Restaurant;
