import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import Loadable from "react-loadable";

import Navbar from "../Components/Navbar";
import Home from /* webpackPreload: true */ "../Components/Home";
import Meta from "../Components/Common/Head_tags";
import Background from "../Components/Background";
import Social from "../Components/Social";
import styles from "./app.scss";
import MessageEmail from "../Components/Contact/thanks_message";
import Spinner from "../Components/Common/spinner";

const About = Loadable({
  loader: () => import("../Components/About"),
  loading: Spinner
});
const Work = Loadable({
  loader: () => import("../Components/Work"),
  loading: Spinner
});
const Contact = Loadable({
  loader: () => import("../Components/Contact"),
  loading: Spinner
});

const App = () => (
  <Fragment>
    <Meta />
    <Navbar />
    <Background />
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route path="/thanks" component={MessageEmail} />
    </AnimatedSwitch>
    <div className={styles.social}>
      <Social />
    </div>
  </Fragment>
);

export default App;
