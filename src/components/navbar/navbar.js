import React, { Component } from "react";
import "./navbar.css";
// import "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
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
          <form action="#" method="POST" autoComplete="off">
            <label htmlFor="search"> </label>
            <input type="text" name="search" id="search" />
            <button>
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default Navbar;
