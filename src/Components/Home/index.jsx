import React from 'react';
import styles from './Home.css';
import Logo from './Logo';
import animate from '../Common/animate.css';

const Home = () => (
  <div className={styles.root} >
    <Logo className={styles.logo} />
    <span className={`${styles.text} ${animate.animated} ${animate.fadeIn} `}>
      <h5 className="hvr-rotate">Hi, my name is <strong>Juan</strong></h5>
      <h5 className="hvr-rotate">I'm a <strong>Interactive Media Designer</strong></h5>
      <h5 className="hvr-rotate">and <strong>Web Developer</strong> :D</h5>
    </span>
  </div>);

export default Home;
