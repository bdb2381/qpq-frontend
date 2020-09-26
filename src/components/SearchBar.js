import React from "react";

const SearchBar = (props) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Value"
        // checked={props.sortBy === "alphabetically" ? true : false}
        // onChange={(e) => props.handleSort(e)}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Name"
        // checked={props.sortBy === "price" ? true : false}
        // onChange={(e) => props.handleSort(e)}
        />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        {/* <select onChange={(e) => props.handleFilter(e)} value={props.filterBy}>
          <option value="All">All</option>
          </select> */}
      </label>
    </div>
  );
};

export default SearchBar;
