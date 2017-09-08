'use strict'
import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import App from './app'




import { BrowserRouter as Router, Route } from 'react-router-dom'

ReactDom.render(
        <Router >
            <Route path="/" component={App} />
        </Router>  ,
    document.getElementById('root')
)