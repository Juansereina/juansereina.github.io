import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Background from './Components/p5'


class App extends Component {
  render() {
    return (
      <div>
        <Background/>
        <Navbar/>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
          >
            <Route path='/' exact component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/work' component={Work}/>
            <Route path='/contact' component={Contact}/>
          </AnimatedSwitch>
        </div>
      )
    }
  }
  export default App
