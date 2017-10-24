import React, {Component} from 'react'
import styles from './Home.css'
import Logo from './Logo'
import animate from '../Common/animate.css'

class Home extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Logo className={styles.logo}/>
                <span className={`${styles.text} ${animate.animated} ${animate.fadeIn} `}>
                <h5>Hi, my name is <strong>Juan</strong></h5>
                <h5>I'm a <strong>Interactive Media Designer</strong></h5>
                <h5>and <strong>Web Developer</strong> :D</h5>
                </span>
            </div>
        )
    }
}

export default Home