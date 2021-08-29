import React from "react";

import { Text } from "../../../typography/text.component";
import { SvgXml } from "react-native-svg";
import star from "../../../../../assets/star";
import {
  Title,
  Adress,
  RestaurantCard,
  RestaurandCardCover,
  Info,
  Row
} from "./restaurant-info-card.styles";
import { Spacer } from "../../../spacer/spacer.component";

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
  console.log("Children");
  return (
    <RestaurantCard elevation={5}>
      <RestaurandCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text>{name}</Text>

        <Row>
          {ratingArray.map((x, index) => (
            <>
              <SvgXml key={index} xml={star} width={20} height={20} />
            </>
          ))}
          <Spacer position="left" size="large">
            {isClosedTemporarily ? <Text>Yess</Text> : <Text>No</Text>}
          </Spacer>
        </Row>
        <Adress>{address}</Adress>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfo;
