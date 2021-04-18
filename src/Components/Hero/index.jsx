import React from "react";
import { FormattedMessage } from 'react-intl';
import image from "../../Assets/JuanReina.webp";
import styles from "./styles.scss";

export default ({ id }) => (
  <header id={id} className={styles.root}>
    {/* Optimized the image loading time */}
    <link rel="preload" as="image" href={image} />
    <div className={styles.container}>
      <h1 className={styles.title}>Juan Sebastián Reina</h1>
      <h2 className={styles.subtitle}>FrontEnd Developer</h2>
      {/* In development */}
      {/* <button className={styles.cta}><FormattedMessage id="download" /></button> */}
      <img className={styles.image} src={image} alt="Juan Sebastian's photo" />
    </div>
  </header>
);
