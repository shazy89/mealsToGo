import React from "react";

import styled from "styled-components";
import { Text } from "../../../typography/text.component";

const HomeScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeScreen>
      <Text>Hi From the restaurant screen</Text>
    </HomeScreen>
  );
};

export default Home;
