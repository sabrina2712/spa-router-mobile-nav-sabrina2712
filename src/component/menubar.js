import React, { Component } from "react";
import Home from "./home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";

export default class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  clickHandler = () => {
    this.setState({ isOpen: true });
  };

  menuBarOption = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    );
  };
  render() {
    return (
      <div>
        {this.menuBarOption()}
        <div className="App">
          <div onClick={this.clickHandler}>
            <div className="burger-menu"></div>
            <div className="burger-menu"></div>
            <div className="burger-menu"></div>
          </div>
        </div>
      </div>
    );
  }
}
