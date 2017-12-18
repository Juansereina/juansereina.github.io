import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.css'
import FontAwesome from 'react-fontawesome'

const default_style_icon=`${styles.icon} hvr-forward`



const Nav_bar = () => (
    <nav className={styles.root}>
        <div className={styles.logo}>
            <Link to='/' >
                <FontAwesome name='user-secret' size='2x' className = {default_style_icon}/>
            </Link>
        </div>
        <div className={styles.link}>
            <Link to='/home'  >
                <FontAwesome name='home' className = {default_style_icon}/>
            </Link>
            <Link to='/work' >
                <FontAwesome name='code' className = {default_style_icon}/>
            </Link>
            <Link to='/contact' >
                <FontAwesome name='paper-plane' className = {default_style_icon}/>
            </Link>
        </div>
        <div className={styles.social}>
            <a href="https://www.behance.net/Juanse2296" target="_blank">
                <FontAwesome name='behance' className = {default_style_icon}/>
            </a>
            <a href="https://github.com/Juanse2296" target="_blank">
                <FontAwesome name='github' className = {default_style_icon}/>
            </a>
            <a href="https://twitter.com/Juanse2296" target="_blank">
                <FontAwesome name='twitter' className = {default_style_icon}/>
            </a>
        </div>
    </nav>
)

export default Nav_bar