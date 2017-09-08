import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.css'

const Navbar = () => (
    <nav className={styles.root}>
        <div className={styles.logo}>
            <Link className="navbar-text" to='/' >
                <span className={`fa fa-bandcamp fa-2x ${styles.icon}`}/>
            </Link>
        </div>
        <div className={styles.link}>
            <Link className="navbar-text" to='/home' >
                <span className={`fa fa-home ${styles.icon}`}/>
            </Link>
            <Link className="navbar-text" to='/work' >
                <span className={`fa fa-code ${styles.icon}`}/>
            </Link>
            <Link className="navbar-text" to='/contact' >
                <span className={`fa fa-paper-plane ${styles.icon}`}/>
            </Link>
        </div>
        <div className={styles.social}>
            <a href="https://www.behance.net/Juanse2296" target="_blank">
                <span className={`fa fa-behance ${styles.icon}`}/>
            </a>
            <a href="https://github.com/Juanse2296" target="_blank">
                <span className={`fa fa-github ${styles.icon}`}/>
            </a>
            <a href="https://twitter.com/Juanse2296" target="_blank">
                <span className={`fa fa-twitter ${styles.icon}`}/>
            </a>
        </div>
    </nav>
)

export default Navbar