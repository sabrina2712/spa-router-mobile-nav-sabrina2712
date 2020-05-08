import { Switch, Route, Link } from "react-router-dom";

import React, { Component } from "react";
import Projects from "./projects";
import About from "./about";
import Home from "./home";

export default class Menubar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
            <div>
              <ul>
                <li>
                  <Link
                    onClick={() => {
                      this.setState({ isOpen: false });
                    }}
                    to="/"
                  >
                    home
                  </Link>{" "}
                </li>
                <li>
                  <Link to="/about">About </Link>{" "}
                </li>
                <li>
                  <Link to="/projects">Projects</Link>{" "}
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/about">
              <div>You clicked about</div>
            </Route>
            <Route path="/projects">
              <div>You clicked projects</div>
            </Route>
            <Route path="/">
              <div>You clicked home</div>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
