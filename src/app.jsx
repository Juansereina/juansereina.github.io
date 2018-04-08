import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Favicon from 'react-favicon';
import { UserAgentProvider, UserAgent } from '@quentin-sommer/react-useragent';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Background from './Components/p5';
import Meta from './Components/Common/Head_tags';

const App = () => (
  <div>
    <Meta />
    <UserAgentProvider ua={window.navigator.userAgent}>
      <UserAgent mobile>
        {uaIsMobile => (!uaIsMobile && <Background />)}
      </UserAgent>
    </UserAgentProvider>
    <Favicon url="assets/favicons/favicon.ico" />
    <Navbar />
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      {/*<Route path="/work" component={Work} />*/}
      <Route path="/contact" component={Contact} />
    </AnimatedSwitch>
  </div>);


export default App;
