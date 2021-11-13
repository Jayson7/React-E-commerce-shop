import React, { Component } from "react";
import "./home.css";
export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-container">
          <div className="loader">
            <div className="box1"></div>
            <div className="box2"></div>
            <div className="box3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
