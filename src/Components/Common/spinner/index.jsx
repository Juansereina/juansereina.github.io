import React from "react";
import spinnerCss from "./spinner.scss";

const spinner = (props) => (
  <div className={props.root}>
    <div className={spinnerCss.spinner}>
      <div className={`${spinnerCss.loader}`}>Loading...</div>
    </div>
  </div>
);

export default spinner;
