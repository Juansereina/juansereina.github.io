import React from "react";
import Social from "../Social";
import styles from "./styles.scss";

export default ({ id }) => (
  <footer id={id} className={styles.root}>
    <div className={styles.background}></div>
    <div className={styles.contaier}>
      <div className={styles.content}>
        <h1 className={styles.title}>Juan Sebastián Reina</h1>
        <h2 className={styles.subtitle}>FrontEnd Developer</h2>
      </div>
      <Social className={styles.social} />
    </div>
  </footer>
);
