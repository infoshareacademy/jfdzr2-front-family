import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./SearchBar.css";

export const SearchBar = () => {
  const BarStyling = {
    width: "47%",
    background: "##ffffff",
    border: "1px solid rgb(187, 187, 187)",
    padding: "0.5rem",
    marginTop: "50px",
  };

  return (
    <form className="FormSearch">
      <input
        type="text"
        style={BarStyling}
        key="random1"
        value=""
        placeholder={"search course"}
        name="search"
      />
      <button type="submit" className="SearchButton">
        <SearchIcon />
      </button>
    </form>
  );
};
