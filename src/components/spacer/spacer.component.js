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
const LeftSmall = styled(View)`
  margin-left: 4px;
`;
const LeftMedium = styled(View)`
  margin-left: 8px;
`;
const LeftLarge = styled(View)`
  margin-left: 16px;
`;
const RightSmall = styled(View)`
  margin-right: 4px;
`;
const RightMedium = styled(View)`
  margin-right: 8px;
`;
const RightLarge = styled(View)`
  margin-right: 16px;
`;

const Spacer = ({ variant }) => {
  switch (variant) {
    case "top.medium":
      return <TopMedium />;
    case "top.medium":
      return <TopLarge />;
    case "top.large":
      return <TopMedium />;
    case "bottom.small":
      return <BottomSmall />;
    case "bottom.medium":
      return <BottomMedium />;
    case "bottom.large":
      return <BottomLarge />;
    case "left.small":
      return <LeftSmall />;
    case "left.medium":
      return <LeftMedium />;
    case "left.large":
      return <LeftLarge />;
    case "Right.small":
      return <RightSmall />;
    case "Right.medium":
      return <RightMedium />;
    case "Right.large":
      return <RightLarge />;
    default:
      return <TopSmall />;
  }
};

export default Spacer;
