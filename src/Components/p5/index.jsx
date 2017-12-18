import React, { Component } from'react';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './src';
import styles from './p5.css'
class App extends Component{
    constructor() {
        super();
        this.state = {
            stateSketch: sketch,
        }
    }
    render () {
        return (
            <div className={styles.root}>
                <P5Wrapper style="vertical-align:top" sketch={this.state.stateSketch}/>
            </div>
        );
    }
}

export default App