
import React, { useRef, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
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

  const handleKey = ({ keyCode, target }) => {
    if(keyCode === 13) {
      handleClick({ target });
    }
  }

  useEffect(() => {
    const storedMode = JSON.parse(localStorage.getItem(darkMode)) || isActive;

    document.querySelector('body').classList.toggle('dark', isDarkMode && storedMode);
  });

  return (
    <FormattedMessage id="nav.dark">
      { text => <div aria-label={text} onClick={handleClick} className={styles.root} ref={ref} role="button" tabIndex="0" onKeyUp={handleKey}>
                  <div className={`${isDarkMode ? styles.moon: styles.sun}`}></div>
                </div>
      }
    </FormattedMessage>
  );
}
