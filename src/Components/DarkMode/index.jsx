
import React, { useRef, useEffect, useState } from 'react';
import styles from './styles.scss';

export default () => {
  const darkMode = 'dark';
  const isActive = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setDarkMode] = useState(isActive);
  const ref = useRef();

  const handleClick = () => {
    localStorage.setItem(darkMode, JSON.stringify(!isDarkMode));
    setDarkMode(!isDarkMode);
  }

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem(darkMode));

    document.querySelector('body').classList.toggle('dark', isDarkMode && storedMode);
  });

  return <div onClick={handleClick} className={styles.root} ref={ref}>
    <div className={`${isDarkMode ? styles.moon: styles.sun}`}></div>
  </div>;
}
