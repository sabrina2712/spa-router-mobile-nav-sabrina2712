import { BrowserRouter as Switch, Route, Router, Link } from "react-router-dom";

import React, { Component } from "react";

export default class Menubar extends Component {
  render() {
    return (
      <div className="drop-menubar">
        <div>Home</div>
        <div>About</div>
        <div>Project</div>
      </div>
    );
  }
}
