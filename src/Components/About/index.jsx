import React from "react";
import { FormattedMessage } from 'react-intl';
import styles from "./styles.scss";

export default ({ id }) => {

  const formatValues = {
    emoji: chunk => <span className={styles.emoji} aria-hidden="true">{chunk}</span>,
    strong: chunk => <strong>{chunk}</strong>
  }

  return (
    <div id={id} className={styles.root}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <p className={styles.text}>
         <FormattedMessage id="about.1" values={formatValues}/>
        </p>
        <p className={styles.text}>
        <FormattedMessage id="about.2" values={formatValues}/>
        </p>
      </div>
      <div className={`${styles.background} ${styles.bottom}`}></div>
    </div>
  );
};
