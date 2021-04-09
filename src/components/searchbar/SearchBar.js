import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from 'react';
import "./SearchBar.css";

export const SearchBar = ({onFilterChange}) => {
  const [filter, setFilter] = useState('');

  const BarStyling = {
    width: "47%",
    background: "##ffffff",
    border: "1px solid rgb(187, 187, 187)",
    padding: "0.5rem",
    marginTop: "50px",
  };
  
  const handleOnChange = (event) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value)
  }

  return (
    <form className="FormSearch">
      <input
        type="text"
        style={BarStyling}
        key="random1"
        value={filter}
        onChange={handleOnChange}
        placeholder={"Search by title"}
        name="search"
      />
      <button disabled type="submit" className="SearchButton">
        <SearchIcon />
      </button>
    </form>
  );
};
