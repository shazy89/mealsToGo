import React from "react";
import { StyleSheet, Platform, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import RestaurantInfo from "../components/restaurant-info-card";
import RestaurantSearch from "../components/restaurant-search";
import { Spacer } from "../../../spacer/spacer.component";

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
        data={[
          {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            title: "First Item"
          },
          {
            id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
            title: "Second Item"
          }
        ]}
        renderItem={() => <RestaurantInfo restaurant={{}} />}
        keyExtractor={(item) => item.id}
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
