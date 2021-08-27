import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled(View)`
  margin-top: 4px;
`;
const TopMedium = styled(View)`
  margin-top: 8px;
`;
const TopLarge = styled(View)`
  margin-top: 16px;
`;
const BottomSmall = styled(View)`
  margin-bottom: 4px;
`;
const BottomMedium = styled(View)`
  margin-bottom: 8px;
`;
const BottomLarge = styled(View)`
  margin-bottom: 16px;
`;

const Spacer = ({ variant }) => {
  if (variant === "top.medium") {
    return <TopMedium />;
  }
  if (variant === "top.large") {
    return <TopLarge />;
  }
  return <TopSmall />;
};

export default Spacer;
