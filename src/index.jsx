import React from "react";
import ReactDom from "react-dom";
import LogRocket from "logrocket";
import App from "./App";
LogRocket.init("3blt44/portfolio");

ReactDom.render(
  <App />,
  document.getElementById("root")
);
