import React from "react";
import "./SearchForm.css";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clearState = () => {
    this.setState({
      search: ""
    });
  };

  handleSearch = event => {
    event.preventDefault();
    this.props.searchArticles(this.state.search);
    this.clearState();
  };

  keyDown = event => {
    if (event.keyCode === 13) {
      this.handleSearch(event);
    }
  };

  render() {
    return (
      <form className="SearchForm">
        <input
          type="text"
          placeholder="Search for news articles here"
          className="SearchForm-input"
          name="search"
          value={this.state.search}
          onChange={event => this.handleChange(event)}
          onKeyDown={event => this.keyDown(event)}
        />
        <button
          type="button"
          className="SearchForm-button"
          onClick={event => this.handleSearch(event)}
        >
          Search Now
        </button>
      </form>
    );
  }
}

export default SearchForm;
