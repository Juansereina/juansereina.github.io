import React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import LogRocket from "logrocket";
import App from "./App";

LogRocket.init("3blt44/portfolio");
ReactDom.render(
  <Router>
    <Route component={App} />
  </Router>,
  document.getElementById("root")
);
