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
      current: local
    };
  }

  changeData = category => {
    this.setState({ current: category });
  };

  render() {
    return (
      <div className="app">
        <Menu data={this.state.data} changeData={this.changeData} />
        <main className="App-main">
          <SearchForm />
          <NewsContainer newsType={this.state.current} />
        </main>
      </div>
    );
  }
}

export default App;
