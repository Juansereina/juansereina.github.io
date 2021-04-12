import React, { useRef, useEffect } from 'react';
import styles from './styles.scss';

export default () => {
  const ref = useRef();

  useEffect(() => {
    const scrollCallBack = () => {
      // sets the boxshadow at the bottom of the nav
      const isNavAtTop = window.scrollY === 0;
      ref.current.classList.toggle(styles.rootShadow, !isNavAtTop);
    }

    window.addEventListener('scroll', scrollCallBack)

    return () => window.removeEventListener('scroll', scrollCallBack);
  });

  const handleClick = ({ target }) => {
    const { value } = target.attributes['data-value'];
    const element = document.getElementById(value);
    const offset = 50;

    location.replace(`#${value}`);

    window.scroll({
      top: element.offsetTop - ref.current.clientHeight - offset,
      behavior: 'smooth'
    });
  }

  return (
    <nav className={styles.root} ref={ref}>
      <span className={styles.logo} onClick={handleClick} data-value="hero">&#60;JSR&#62;</span>
      <ul className={styles.list}>
        <li className={styles.item} onClick={handleClick} data-value="about">About</li>
        <li className={styles.item} onClick={handleClick} data-value="work">Work Experience</li>
        <li className={styles.item} onClick={handleClick} data-value="contact">Contact</li>
      </ul>
    </nav>
  );
};
