import React, { Component } from 'react';
import '../css/Chart.css';

class ChartItem extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div className="ChartItem">
            <div className="ChartItem--label issuer">
              <span className="mobile-label">Issuer</span>
              <span>{this.props.item.securityName}</span>
            </div>
            <div className="ChartItem--label description">
              <span className="mobile-label">Description</span>
              <span>{this.props.item.description}</span>
            </div>
            <div className="ChartItem--label currency">
              <span className="mobile-label">Currency</span>
              <span>{this.props.item.currency}</span>
            </div>
            <div className="ChartItem--label years-remaining">
              <span className="mobile-label">Years Remaining</span>
              <span>{this.props.item.yearsRemaining}</span>
            </div>
            <div className="ChartItem--label benchmark">
              <span className="mobile-label">Benchmark</span>
              <span>{this.props.item.benchmarkSecurityDescription}</span>
            </div>
            <div className="ChartItem--spread-section">
              <div className="ChartItem--spread-label mobile-label">Spread vs.</div>
              <div className="ChartItem--label">
                <span className="mobile-label">Benchmark</span>
                <span>{this.props.item.bidSpreadVsBenchmark}</span>
              </div>
              <div className="ChartItem--label">
                <span className="mobile-label">GoC Curve</span>
                <span>{this.props.item.bidSpreadVsGocCurve}</span>
              </div>
              <div className="ChartItem--label">
                <span className="mobile-label">3M CDOR</span>
                <span>{this.props.item.bidSpreadVs3mCdor}</span>
              </div>
              <div className="ChartItem--label">
                <span className="mobile-label">3M USDL</span>
                <span>{this.props.item.bidSpreadVs3mUsdl}</span>
              </div>
                <div className="ChartItem--spread-bottom mobile-label"></div>
            </div>
            <div className="ChartItem--label updated">
              <span className="mobile-label">Updated</span>
              <span>{this.props.item.readableTimestamp}</span>
            </div>
            <div className="ChartItem--label graph-icon">
              <i className="fa fa-signal" aria-hidden="true"></i>
            </div>
        </div>
    );
  }
}

export default ChartItem;
