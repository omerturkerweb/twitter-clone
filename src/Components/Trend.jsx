import React, { Component } from "react";
class Trend extends Component {
  render() {
    const trend = this.props.trend;

    return (
      <div className="trend">
        <div className="trend-more-button">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="trend-head">
          <span className="rank">{trend.id} - </span>
          <span className="subject">{trend.subject}</span>
          <span className="on-trends"> on trends now </span>
        </div>
        <div className="trend-body">
          <span className="title">{trend.title}</span>
        </div>
        <div className="trend-bottom">
          <span>{trend.totalTweets} Tweet </span>
        </div>
      </div>
    );
  }
}
export default Trend;
