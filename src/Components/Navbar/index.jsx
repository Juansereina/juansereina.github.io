import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import styles from './navbar.scss';

const defaultStyleIcon = `${styles.icon} hvr-forward`;
const active =  `${styles.iconActive} hvr-forward`;

const NavBar = ({ props }) =>{
  let currentLocation = window.location.pathname 

  return  (
    <nav className={styles.root}>
      <div className={styles.logo}>
        <NavLink to="/" >
          <FontAwesome name="home" className={ currentLocation == '/' ? active : defaultStyleIcon} />
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/about" >
          <FontAwesome name="user-secret" className={ currentLocation == '/about' ? active : defaultStyleIcon} />
        </NavLink>
        <NavLink to="/work" >
          <FontAwesome name="code" className={ currentLocation == '/work' ? active : defaultStyleIcon} />
        </NavLink>
        <NavLink to="/contact" >
          <FontAwesome name="paper-plane" className={ currentLocation == '/contact' ? active : defaultStyleIcon} />
        </NavLink>
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
}

export default NavBar;
