import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Switch, Route, Router, Link } from "react-router-dom";
import Menubar from "./components/menubar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onClickHandler = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div>
        {this.state.isOpen === false ? (
          <div className="content">
            <div>Home</div>
            <div onClick={this.onClickHandler}>menu</div>
          </div>
        ) : (
          <Menubar />
        )}
      </div>
    );
  }
}

export default App;
