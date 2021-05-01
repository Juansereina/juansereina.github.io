import React, { useRef, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './styles.scss';

export default () => {
  const ref = useRef();

  useEffect(() => {
    const scrollCallBack = () => {
      // sets the boxshadow at the bottom of the nav
      const isNavAtTop = window.scrollY === 0;
      ref.current.classList.toggle(styles.shadow, !isNavAtTop);
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

  const handleKey = ({ keyCode, target }) => {
    if(keyCode === 13) {
      handleClick({ target });
    }
  }

  return (
    <nav className={styles.root} ref={ref}>
      <FormattedMessage id="nav.home">
      { text => <span
                  tabIndex="0"
                  aria-label={text}
                  role="link" className={styles.logo}
                  onClick={handleClick}
                  onKeyUp={handleKey}
                  data-value="hero">
                    &#60;JSR&#62;
                </span>
      }
      </FormattedMessage>
      <span tabIndex="0" className={styles.skip} onClick={handleClick} onKeyUp={handleKey} data-value="about"><FormattedMessage id="nav.skip" /></span>
      <ul className={styles.list}>
        <li tabIndex="0" className={styles.item} onClick={handleClick} onKeyUp={handleKey} data-value="about" role="link"><FormattedMessage id="nav.about" /></li>
        <li tabIndex="0" className={styles.item} onClick={handleClick} onKeyUp={handleKey} data-value="work" role="link"><FormattedMessage id="nav.work" /></li>
        <li tabIndex="0" className={styles.item} onClick={handleClick} onKeyUp={handleKey} data-value="contact" role="link"><FormattedMessage id="nav.contact" /></li>
      </ul>
    </nav>
  );
};
