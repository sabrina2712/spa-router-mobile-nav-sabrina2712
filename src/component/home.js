import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <switch>
          <Router>
            <div>
              <Link to="/">Home</Link>

              <Route path="/">
                <Home />
              </Route>
            </div>
          </Router>
        </switch>
        ;
      </div>
    );
  }
}
