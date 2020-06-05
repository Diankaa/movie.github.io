import React from "react";
import "./Search.css";

const Search = ({ handleInput, search }) => {
  return (
    <section className="search-wrapper">
      <div className="search">
        <input
          className="search-box"
          type="text"
          placeholder="Search for a movie..."
          onChange={handleInput}
          onKeyPress={search}
        ></input>
        <input type="submit" value="Search" onClick={search} />
      </div>
    </section>
  );
};

export default Search;
