import React from "react";
import { NavLink } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import styles from "./navbar.scss";
import Social from "../Social";
const defaultStyleIcon = `${styles.icon} hvr-forward`;
const active = `${styles.iconActive} hvr-forward`;

const NavBar = props => {
  let currentLocation = window.location.hash;
  return (
    <nav className={styles.root}>
      <div className={styles.home}>
        <NavLink to="/">
          <FontAwesome
            name="home"
            className={currentLocation == "#/" ? active : defaultStyleIcon}
          />
        </NavLink>
      </div>
      <div className={styles.link}>
        <NavLink to="/about">
          <FontAwesome
            name="user-secret"
            className={currentLocation == "#/about" ? active : defaultStyleIcon}
          />
        </NavLink>
        <NavLink to="/work">
          <FontAwesome
            name="code"
            className={currentLocation == "#/work" ? active : defaultStyleIcon}
          />
        </NavLink>
        <NavLink to="/contact">
          <FontAwesome
            name="paper-plane"
            className={
              currentLocation == "#/contact" ? active : defaultStyleIcon
            }
          />
        </NavLink>
      </div>
      <div className={styles.social}>
        <Social />
      </div>
    </nav>
  );
};

export default NavBar;
