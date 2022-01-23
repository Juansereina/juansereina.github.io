import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styles from './styles.scss';
import imageOne from '../../Assets/image-1.webp';
import imageTwo from '../../Assets/image-2.webp';
import imageThree from '../../Assets/image-3.webp';

const formatValues = { strong: (chunk) => <strong>{chunk}</strong> };
const getExperience = (value, target) => {
  return Object.keys(target).filter((key) => key.includes(value));
};

const Work = ({ experience, isCurrent, image }) => {
  const intl = useIntl();
  const experiences = getExperience(experience, intl.messages);
  const last = experiences.length - 1;
  const lastText = experiences[last];
  const [company, summary, ...list] = experiences;

  return (
    <section className={styles.section}>
      <div className={styles.imageContainer}>
        <img
          src={image}
          className={styles.image}
          alt="A cup of coffee and a keyboard"
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          <FormattedMessage id={company} values={formatValues} />
          {isCurrent && <span className={styles.current}> (current job)</span>}
        </h3>
        <p className={styles.text}>
          <FormattedMessage id={summary} values={formatValues} />
        </p>
        <ul className={styles.list}>
          {list.map(
            (item, index) =>
              index !== last && (
                <li key={`item-${index}`} className={styles.item}>
                  <FormattedMessage id={item} values={formatValues} />
                </li>
              )
          )}
        </ul>
        <p className={styles.text}>
          <FormattedMessage id={lastText} values={formatValues} />
        </p>
      </div>
    </section>
  );
};

export default ({ id }) => {
  return (
    <div id={id} className={styles.root}>
      <Work experience="huge" image={imageOne} isCurrent />
      <Work experience="psl" image={imageTwo} />
      <Work experience="freelance" image={imageThree} />
    </div>
  );
};
