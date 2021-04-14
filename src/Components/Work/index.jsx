import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles.scss";
import imageOne from "../../Assets/image-1.jpg";
import imageTwo from "../../Assets/image-2.jpg";
import imageThree from "../../Assets/image-3.jpg";

export default ({ id }) => (
  <div id={id} className={styles.root}>
    <div className={styles.imageContainer}>
      <img src={imageOne} className={styles.image} />
    </div>
    <section className={styles.content}>
      <h3 className={styles.title}>
        <FormattedMessage id="experience.huge" /> - <span>Current job</span>
      </h3>
      <p className={styles.text}>
        <FormattedMessage id="experience.huge.1" />
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FormattedMessage id="experience.huge.2" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.huge.3" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.huge.4" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.huge.5" />
        </li>
      </ul>
      <p className={styles.text}>
        <FormattedMessage id="experience.huge.6" />
      </p>
    </section>
    <section className={styles.content}>
      <h3 className={styles.title}>
        <FormattedMessage id="experience.psl" />
      </h3>
      <p className={styles.text}>
        <FormattedMessage id="experience.psl.1" />
      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FormattedMessage id="experience.psl.2" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.psl.3" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.psl.4" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.psl.5" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.psl.6" />
        </li>
      </ul>
      <p className={styles.text}>
        <FormattedMessage id="experience.psl.7" />
      </p>
    </section>
    <div className={styles.imageContainer}>
      <img src={imageTwo} className={styles.image} />
    </div>{" "}
    <div className={styles.imageContainer}>
      <img src={imageThree} className={styles.image} />
    </div>
    <section className={styles.content}>
      <h3 className={styles.title}>
        <FormattedMessage id="experience.freelance" />
      </h3>
      <p className={styles.text}>
        <FormattedMessage id="experience.freelance.1" />

      </p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <FormattedMessage id="experience.freelance.2" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.freelance.3" />
        </li>
        <li className={styles.item}>
          <FormattedMessage id="experience.freelance.4" />
        </li>
      </ul>
      <p className={styles.text}>
        <FormattedMessage id="experience.freelance.5" />
      </p>
    </section>
  </div>
);
