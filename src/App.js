import React, { Component } from "react";

import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
            <Switch>
              <Route path="/">
                <div>Home</div>
              </Route>

              <Route path="*">
                <div>404</div>
                Please visit:
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About</Link>
              </Route>
            </Switch>

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
