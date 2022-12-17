import React, { Component } from "react";
import Trends from "../Context/Trends.json";
import Trend from "./Trend";

class SideBarRight extends Component {
  render() {
    return (
      <>
        <div className="side-bar-right">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search Twitter" type="text"></input>
          </div>
          <div className="trends">
            <span className="trends-title">Trends for you </span>
            {Trends.map((trend) => {
              return <Trend key={trend.id} trend={trend} />;
            })}
            <div className="more">Show more</div>
          </div>
          <div className="suggestions">{}</div>
        </div>
      </>
    );
  }
}

export default SideBarRight;
