import React, { Component } from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";
import Edit from "./product/Edit";
import List from "./product/List";
import Form from "./product/Form";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <main>
          <Nav />
          <Switch>
            <Route path="/product/index" exact component={List} />
            <Route path="/product/edit/:id" component={Edit} />
            <Route path="/product/form" component={Form} />
          </Switch>
        </main>
      </Router>
    );
  }
}

// for <div if="main-product"></div>
ReactDOM.render(<Main />, document.getElementById("main-product"));
