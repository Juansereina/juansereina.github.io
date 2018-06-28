import React from "react";
import FontAwesome from "react-fontawesome";
import { NavLink } from "react-router-dom";
import styles from "./navbar.scss";
const defaultStyleIcon = `${styles.icon} hvr-forward`;
const active = `${styles.iconActive} hvr-forward`;
const navIcon = ({ location, name, currentLocation }) => (
  <NavLink to={location}>
    <FontAwesome
      name={name}
      className={currentLocation === `#${location}` ? active : defaultStyleIcon}
    />
  </NavLink>
);

export default navIcon;
