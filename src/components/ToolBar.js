import React, { Component } from 'react';
import '../css/ToolBar.css';

class ToolBar extends Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="ToolBar">
        <div className="ToolBar-header">
          <h3>MARKET</h3>
        </div>
        <div className="ToolBar-tabs">
          <div className="ToolBar-tab active">
            <span>Secondary Levels</span>
          </div>
          <div className="ToolBar-tab">
            <span>New Issue Pricing Benchmarks - CAD</span>
          </div>
          <div className="ToolBar-tab">
            <span>New Issue Pricing Benchmarks - USD</span>
          </div>
          <div className="ToolBar-tab">
            <span>Swap Rates - CAD</span>
          </div>
          <div className="ToolBar-tab">
            <span>Swap Rates - USD</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBar;
