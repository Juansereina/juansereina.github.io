import React from 'react';
import styles from './styles.scss';

export default () => (
  <nav className={styles.root}>
    <span className={styles.logo}>&#60;JSR&#62;</span>
    <ul className={styles.list}>
      <li className={styles.item}>About</li>
      <li className={styles.item}>Work Experience</li>
      <li className={styles.item}>Contact</li>
    </ul>
  </nav>
);
