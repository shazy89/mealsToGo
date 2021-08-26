import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  console.log(searchQuery);
  return (
    <Searchbar
      style={{ width: "90%" }}
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Search;
