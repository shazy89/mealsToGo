import React from "react";

import styled from "styled-components";
import { Text } from "../../../typography/text.component";

const MapScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Map = () => {
  return (
    <MapScreen>
      <Text>Hi From the restaurant screen</Text>
    </MapScreen>
  );
};

export default Map;
