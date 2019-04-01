import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import NavMenu from "./components/NavMenu/NavMenu";
import { Me } from "./components/Me/Me";
import Portfolio from "./components/Portfolio/Portfolio";
import { Skills } from "./components/Skills/Skills";
import { Contact } from "./components/Contact/Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <NavMenu />
        <div className="page-container">
          <Route path="/" exact component={Me} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
