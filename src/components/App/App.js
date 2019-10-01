import React, { Component } from 'react';
import local from '../../data/local';
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm/>
        <Menu />
        <NewsContainer newsType={local}/>
      </div>
    );
  }
}

export default App;
