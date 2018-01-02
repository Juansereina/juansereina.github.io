import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styles from './navbar.css';

const defaultStyleIcon = `${styles.icon} hvr-forward`;

const NavBar = () => (
  <nav className={styles.root}>
    <div className={styles.logo}>
      <Link to="/" >
        <FontAwesome name="user-secret" size="2x" className={defaultStyleIcon} />
      </Link>
    </div>
    <div className={styles.link}>
      <Link to="/home" >
        <FontAwesome name="home" className={defaultStyleIcon} />
      </Link>
      <Link to="/work" >
        <FontAwesome name="code" className={defaultStyleIcon} />
      </Link>
      <Link to="/contact" >
        <FontAwesome name="paper-plane" className={defaultStyleIcon} />
      </Link>
    </div>
    <div className={styles.social}>
      <a href="https://www.behance.net/Juanse2296" target="_blank" rel="noopener noreferrer">
        <FontAwesome name="behance" className={defaultStyleIcon} />
      </a>
      <a href="https://github.com/Juanse2296" target="_blank" rel="noopener noreferrer">
        <FontAwesome name="github" className={defaultStyleIcon} />
      </a>
      <a href="https://twitter.com/Juanse2296" target="_blank" rel="noopener noreferrer">
        <FontAwesome name="twitter" className={defaultStyleIcon} />
      </a>
    </div>
  </nav>
);

export default NavBar;
