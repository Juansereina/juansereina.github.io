import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./styles.scss";
import imageOne from "../../Assets/image-1.jpg";
import imageTwo from "../../Assets/image-2.jpg";
import imageThree from "../../Assets/image-3.jpg";

export default ({ id }) => {
  const formatValues = { strong: chunk => <strong>{chunk}</strong> }

  return (
    <div id={id} className={styles.root}>
      <div className={styles.imageContainer}>
        <img src={imageOne} className={styles.image} />
      </div>
      <section className={styles.content}>
        <h3 className={styles.title}>
          <FormattedMessage id="experience.huge" values={formatValues}/> - <span>Current job</span>
        </h3>
        <p className={styles.text}>
          <FormattedMessage id="experience.huge.1" values={formatValues}/>
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <FormattedMessage id="experience.huge.2" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.huge.3" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.huge.4" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.huge.5" values={formatValues}/>
          </li>
        </ul>
        <p className={styles.text}>
          <FormattedMessage id="experience.huge.6" values={formatValues}/>
        </p>
      </section>
      <section className={styles.content}>
        <h3 className={styles.title}>
          <FormattedMessage id="experience.psl" values={formatValues}/>
        </h3>
        <p className={styles.text}>
          <FormattedMessage id="experience.psl.1" values={formatValues}/>
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <FormattedMessage id="experience.psl.2" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.psl.3" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.psl.4" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.psl.5" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.psl.6" values={formatValues}/>
          </li>
        </ul>
        <p className={styles.text}>
          <FormattedMessage id="experience.psl.7" values={formatValues}/>
        </p>
      </section>
      <div className={styles.imageContainer}>
        <img src={imageTwo} className={styles.image} values={formatValues}/>
      </div>{" "}
      <div className={styles.imageContainer}>
        <img src={imageThree} className={styles.image} values={formatValues}/>
      </div>
      <section className={styles.content}>
        <h3 className={styles.title}>
          <FormattedMessage id="experience.freelance" values={formatValues}/>
        </h3>
        <p className={styles.text}>
          <FormattedMessage id="experience.freelance.1" values={formatValues}/>

        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <FormattedMessage id="experience.freelance.2" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.freelance.3" values={formatValues}/>
          </li>
          <li className={styles.item}>
            <FormattedMessage id="experience.freelance.4" values={formatValues}/>
          </li>
        </ul>
        <p className={styles.text}>
          <FormattedMessage id="experience.freelance.5" values={formatValues}/>
        </p>
      </section>
    </div>
  );
}
