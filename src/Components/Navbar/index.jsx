import React from "react";
import styles from "./navbar.scss";
import Social from "../Social";
import NavIcon from "./navIcon";

const iconsData = [
  {
    name:"home",
    location:"/"
  },
  {
    name:"user-secret",
    location:"/about"
  },
  {
    name:"code",
    location:"/work"
  },
  {
    name:"paper-plane",
    location:"/contact"
  }
]

const NavBar = props => {
  let currentLocation = window.location.hash;
  return (
    <nav className={styles.root}>
      <div className={styles.home}>
        <NavIcon name={iconsData[0].name} location={iconsData[0].location} currentLocation={currentLocation} />
      </div>
      <div className={styles.link}>
      {iconsData.map((icon, index) => index !==0 ? (<NavIcon key={icon.name} name={icon.name} location={icon.location} currentLocation={currentLocation} />) : '')}
      </div>
      <div className={styles.social}>
        <Social />
      </div>
    </nav>
  );
};

export default NavBar;
