import React, { Component } from 'react';
import ChartItem from './ChartItem';
import '../css/Chart.css';

class Chart extends Component {

  constructor() {
    super();
    this.getJSON = this.getJSON.bind(this);

    this.state = {
      secondaryLevels: []
    };
  }

  componentDidMount(){
      let self = this;
      this.getJSON('https://gist.githubusercontent.com/espinet/922527b7ea1606127f7dba413a911937/raw/245370f480934a50eb3fa68891fc9476cce894e2/secondary-levels.json', function(data){self.loadJSON(data)});
  }

  getJSON(path, success) {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
      if (xhr.readyState === XMLHttpRequest.DONE){
        if (xhr.status === 200){
          success(JSON.parse(xhr.responseText));
        }
        else {
          console.error(xhr);
        }
      }
    };
    xhr.open("GET", path, true);
    xhr.send();
  }

  loadJSON(data){
    this.setState({secondaryLevels: data.secondaryLevels});
  }


  render() {
    return (
      <div className="Chart--wrapper">
        <div className="Chart">
        <div className="Chart-header">
            <div className="Chart-header--item ">
              <span>Issuer</span>
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div className="Chart-header--item description">
              <span>Issue Description</span>
            </div>
            <div className="Chart-header--item currency">
              <span>Currency</span>
            </div>
            <div className="Chart-header--item years-remaining">
              <span>Years Remaining</span>
            </div>
            <div className="Chart-header--item benchmark">
              <span>Benchmark</span>
            </div>
            <div className="Chart-header--spread">
              <div className="Chart-header--spread-label">Spread vs.</div>
              <div className="Chart-header--item">
                <span>Benchmark</span>
              </div>
              <div className="Chart-header--item">
                <span>GoC Curve</span>
              </div>
              <div className="Chart-header--item">
                <span>3M CDOR</span>
              </div>
              <div className="Chart-header--item">
                <span>3M USDL</span>
              </div>
            </div>
            <div className="Chart-header--item updated">
              <span>Updated</span>
            </div>
        </div>
        <div className="Chart--chart-items">
          {
            this.state.secondaryLevels.map(function(item, i){
              return(
                <ChartItem key={i} item={item}/>
              );
            })
          }
        </div>
      </div>
      <div className="Chart--pagination">
        <div className="Chart--page">
          <span>1</span>
        </div>
        <div className="Chart--page">
          <span>2</span>
        </div>
        <div className="Chart--page">
          <span>3</span>
        </div>
        <div className="Chart--page">
          <span>4</span>
        </div>
        <div className="Chart--page">
          <span>5</span>
        </div>
        <div className="Chart--page">
          <span>...</span>
        </div>
        <div className="Chart--page">
          <span>Next <i className="fa fa-angle-right" aria-hidden="true"></i></span>
        </div>
        <div className="Chart--page">
          <span>Last <i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
    );
  }
}

export default Chart;
