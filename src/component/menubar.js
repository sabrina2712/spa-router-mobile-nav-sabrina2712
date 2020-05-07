import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.css";

export default class Menubar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

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
    return <div>{this.menuBarOption()}</div>;
  }
}
