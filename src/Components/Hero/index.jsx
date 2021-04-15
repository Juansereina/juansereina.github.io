import React from "react";
import { FormattedMessage } from 'react-intl';
import image from "../../Assets/JuanReina.png";
import styles from "./styles.scss";

export default ({ id }) => (
  <header id={id} className={styles.root}>
    <div className={styles.container}>
      <h1 className={styles.title}>Juan Sebastián Reina</h1>
      <h2 className={styles.subtitle}>FrontEnd Developer</h2>
      <button className={styles.cta}><FormattedMessage id="download" /></button>
      <img className={styles.image} src={image} alt="Juan Sebastian's photo" />
    </div>
  </header>
);
