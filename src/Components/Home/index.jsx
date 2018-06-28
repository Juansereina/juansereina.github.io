import React from 'react';
import styles from './scss/home.scss';
import Logo from './logo';
import { Animated } from "react-animated-css";

const Home = () => (
  <div className={styles.root} >
    <Logo className={styles.logo} />
    <Animated className={`${styles.text}`}  animationIn="slideInUp" animationOut="fadeOut" isVisible={true}>
      <h5>Hi, my name is <strong className={styles.strongWord}>Juan Sebastián</strong></h5>
      <h5>I'm a <strong className={styles.strongWord}>Interactive Media Designer</strong></h5>
      <h5>and <strong className={styles.strongWord}>Web Developer</strong> :D</h5>
    </Animated>
  </div>);

export default Home;
