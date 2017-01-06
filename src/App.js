import React, { Component } from 'react';
import ToolBar from './components/ToolBar';
import SearchBar from './components/SearchBar';
import Chart from './components/Chart';
import './css/font-awesome.min.css';
import './css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ToolBar />
        <SearchBar />
        <Chart />
      </div>
    );
  }
}

export default App;
