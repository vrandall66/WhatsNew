import React from 'react';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form>
      <input type='text' placeholder='Search for news articles here'/>
      <button type='button'>Search</button>
    </form>
  )
}

export default SearchForm;