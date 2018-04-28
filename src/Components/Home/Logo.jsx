import React from 'react';
import imgCenter from '../../assets/Images/Logo/center.png';
import imgLeft from '../../assets/Images/Logo/left.png';
import imgRight from '../../assets/Images/Logo/right.png';
import imgBottom from '../../assets/Images/Logo/bottom.png';
import styles from './scss/logo.scss';
import Section from './logo_section';

const Logo = () => (
  <div className={styles.root}>
    <div className={styles.logtop}>
      <Section img={imgLeft} animation="bounceInLeft" description="Reina" />
      <Section img={imgCenter} animation="bounceInDown" description="Reina" />
      <Section img={imgRight} animation="bounceInRight" description="Reina" />
    </div>
    <div className={styles.log_bottom}>
      <Section img={imgBottom} animation="bounceInDown" description="Interactive design" />
    </div>
  </div>);

export default Logo;
