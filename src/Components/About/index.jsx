import React from "react";
import { FormattedMessage } from 'react-intl';
import styles from "./styles.scss";

export default ({ id }) => (
  <div id={id} className={styles.root}>
    <div className={styles.backgroundTop}></div>
    <div className={styles.content}>
      <p className={styles.text}>
       <FormattedMessage id="about" />
      </p>
    </div>
    <div className={styles.backgroundBottom}></div>
  </div>
);
