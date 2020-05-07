import React, { Component } from "react";

import "./App.css";

import Menubar from "./component/menubar";
import { BrowserRouter as Switch, Route } from "react-router-dom";

class App extends Component() {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  clickHandler = () => {
    this.setState({ isOpen: true });
  };
  render() {
    return (
      <div>
        <Menubar />
        <div className="App">
          <div onClick={this.clickHandler}>
            <div className="burger-menu"></div>
            <div className="burger-menu"></div>
            <div className="burger-menu"></div>
          </div>
        </div>
        <Switch>
          <Route path="/about">
            <div>I am about</div>
          </Route>
          <Route path="/users">
            <div>I am users</div>
          </Route>
          <Route path="/">
            <div>I am home</div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
