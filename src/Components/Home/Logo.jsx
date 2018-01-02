import React from 'react';
import imgCenter from '../../assets/Images/Logo/center.png';
import imgLeft from '../../assets/Images/Logo/left.png';
import imgRight from '../../assets/Images/Logo/right.png';
import imgBottom from '../../assets/Images/Logo/bottom.png';
import styles from './Logo.css';
import animate from '../Common/animate.css';
import Section from './logo_section';

const Logo = () => (
  <div className={styles.root}>
    <div className={styles.log_top}>
      <Section img={imgLeft} effect={`${animate.animated} ${animate.bounceInLeft}`} description="Reina" />
      <Section img={imgCenter} effect={`${animate.animated} ${animate.jackInTheBox}`} description="Reina" />
      <Section img={imgRight} effect={`${animate.animated} ${animate.bounceInRight}`} description="Reina" />
    </div>
    <div className={styles.log_bottom}>
      <Section img={imgBottom} effect={`${animate.animated} ${animate.bounceInRight}`} description="Interactive design" />
    </div>
  </div>);

export default Logo;
