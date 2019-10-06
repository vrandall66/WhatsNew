import React, { Component } from "react";
import local from "../../data/local";
import technology from "../../data/technology";
import entertainment from "../../data/entertainment";
import science from "../../data/science";
import health from "../../data/health";
import SearchForm from "../SearchForm/SearchForm";
import Menu from "../Menu/Menu";
import NewsContainer from "../NewsContainer/NewsContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        local,
        technology,
        entertainment,
        science,
        health
      },
      current: local,
      displayed: local
    };
  }

  changeData = event => {
    this.setState({
      current: this.state.data[event.target.id],
      displayed: this.state.data[event.target.id]
    });
  };

  searchArticles = searchInputText => {
    let searchedArticles = this.state.current.filter(article => {
      return (
        article.headline
          .toUpperCase()
          .includes(searchInputText.toUpperCase()) ||
        article.description
          .toUpperCase()
          .includes(searchInputText.toUpperCase())
      );
    });

    this.setState({
      displayed: searchedArticles
    });
  };

  render() {
    return (
      <div className="app">
        <Menu changeData={this.changeData} />
        <main className="App-main">
          <SearchForm searchArticles={this.searchArticles} />
          <NewsContainer newsType={this.state.displayed} />
        </main>
      </div>
    );
  }
}

export default App;
