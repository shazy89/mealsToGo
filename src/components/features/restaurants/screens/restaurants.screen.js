import React, { useCallback } from "react";
import { StyleSheet, Platform, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import RestaurantInfoCard from "../components/restaurant-info-card";
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
  const renderItem = useCallback(({ item }) => {
    return (
      <Spacer key={item + "A"} position="bottom" size="large">
        <RestaurantInfoCard key={item} restaurant={{}} />
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
        data={[
          { name: "1" },
          { name: "2" },
          { name: "3" },
          { name: "4" },
          { name: "5" },
          { name: "6" },
          { name: "7" },
          { name: "8" },
          { name: "9" },
          { name: "10" },
          { name: "11" },
          { name: "12" },
          { name: "13" },
          { name: "14" }
        ]}
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
