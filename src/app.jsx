import React, {Component} from 'react'
import styles from './app.css'
import {Route, Switch} from 'react-router-dom'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Work from './Components/Work'
import Contact from './Components/Contact'
import Background from './Components/p5'

class App extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Background/>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/contact' component={Contact}/>
                </Switch>
            </div>
        )
    }
}
export default App

