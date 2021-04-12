import React, { useRef, useEffect } from 'react';
import FontAwesome from "react-fontawesome";
import styles from './styles.scss';

export default () => {
  const ref = useRef();
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const scrollCallBack = () => {
      // sets the boxshadow at the bottom of the nav
      const isNavAtTop = window.scrollY === 0;
      ref.current.classList.toggle(styles.visible, !isNavAtTop);
    }

    window.addEventListener('scroll', scrollCallBack)

    return () => window.removeEventListener('scroll', scrollCallBack);
  });

  return <div onClick={handleClick} className={styles.root} data-value="hero" ref={ref}>
    <FontAwesome name="arrow-up"/>
  </div>;
}
