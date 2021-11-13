import React, { Component } from "react";
import "./navbar.css";
// import "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "./navbars";
export class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="topper"></div>
        <nav>
          <div className="logo">E-Commerce</div>
          <ul>
            <li>
              <a href="#"> Home </a>
            </li>
            <li>
              <a href="#"> Shop </a>
            </li>
            <li>
              <a href="#"> Cart </a>
            </li>

            <li>
              <a href="#"> Fast Sale </a>
            </li>

            <li>
              <a href="#">Profile </a>
            </li>
            <li>
              Help
              <ol className="ol">
                <li>
                  <a href="#"> Track Order</a>
                </li>
                <li>
                  <a href="#"> Pre Order</a>
                </li>
              </ol>
            </li>
          </ul>

          <div className="icons">
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            <i className="fa fa-github" aria-hidden="true"></i>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div className="times">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
        </nav>
        <div className="toggle">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}

export default Navbar;
