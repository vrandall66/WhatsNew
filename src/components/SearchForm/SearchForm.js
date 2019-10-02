import React from "react";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="SearchForm">
      <input
        type="text"
        placeholder="Search for news articles here"
        className="SearchForm-input"
      />
      <button type="button" className="SearchForm-button">
        Search Now
      </button>
    </form>
  );
};

export default SearchForm;
