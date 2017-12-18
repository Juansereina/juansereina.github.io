// import 'babel-polyfill'
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
// import LogRocket from 'logrocket';
// LogRocket.init('3blt44/portfolio');
ReactDom.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);
