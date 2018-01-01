import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LogRocket from 'logrocket';
import App from './app';

LogRocket.init('3blt44/portfolio');
ReactDom.render(
  <Router>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root'),
);
