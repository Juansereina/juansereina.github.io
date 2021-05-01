import React, { useRef, useEffect } from 'react';
import FontAwesome from "react-fontawesome";
import { FormattedMessage } from 'react-intl';
import styles from './styles.scss';

export default () => {
  const ref = useRef();
  const handleClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  const handleKey = ({ keyCode, target }) => {
    if(keyCode === 13) {
      handleClick({ target });
    }
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

  return (
    <FormattedMessage id="nav.top">
      {
        text => <div aria-label={text}
                     onClick={handleClick}
                     onKeyUp={handleKey}
                     className={styles.root}
                     data-value="hero"
                     ref={ref}
                     role="button"
                     tabIndex="0">
                 <FontAwesome name="arrow-up"/>
                </div>
      }
    </FormattedMessage>
  );
}
