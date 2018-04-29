import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Meta from './Components/Common/Head_tags';
import Background from './Components/Background';
import About from './Components/About'

const App = () => (
  <React.Fragment>
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
      {<Route path="/work" component={Work} />}
      <Route path="/contact" component={Contact} />
    </AnimatedSwitch>
  </React.Fragment>);


export default App;
