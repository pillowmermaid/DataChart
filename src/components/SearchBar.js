import React, { Component } from 'react';
import '../css/SearchBar.css';

class SearchBar extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar--item SearchBar-header">
          <h3>Secondary Levels</h3>
        </div>
        <div className="SearchBar--item SearchBar-search">
          <div className="SearchBar-search--field">
            <input placeholder="Select Issuer" />
          </div>
          <div className="SearchBar-search--filter">
            <div className="search-btn">Filter</div>
          </div>
        </div>
        <div className="SearchBar--item SearchBar-buttons">
          <div className="SearchBar-upload search-btn"><i className="fa fa-upload" aria-hidden="true"></i>Upload</div>
          <div className="SearchBar-download search-btn"><i className="fa fa-download" aria-hidden="true"></i>Download</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
