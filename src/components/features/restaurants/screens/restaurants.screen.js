import React, { useCallback, useContext } from "react";
import { StyleSheet, Platform, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card";
import RestaurantSearch from "../components/restaurant-search";
import { Spacer } from "../../../spacer/spacer.component";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SafeAreaViewStyled = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;

const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  const renderItem = useCallback(({ item }) => {
    console.log(item);
    return (
      <Spacer key={item + "A"} position="bottom" size="large">
        <RestaurantInfoCard key={item} restaurant={item} />
      </Spacer>
    );
  }, []);
  const keyExtractor = useCallback((item) => item.name, []);
  return (
    <SafeAreaViewStyled style={styles.container}>
      <Spacer
        position="top"
        size={Platform.OS === "android" ? "large" : null}
      />
      <StatusBar style="dark" />
      <SearchContainer>
        <RestaurantSearch />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </SafeAreaViewStyled>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff"
  }
});
