import React from "react";

const SearchPeople = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        placeholder="Enter character name to search"
      />
    </>
  );
};

export default SearchPeople;
