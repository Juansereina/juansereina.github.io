import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.css';

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Section = ({
  placeholder,
  id,
  type,
  icon,
}) => (
  <div className={`${styles.input}`}>
    <span className={`fa ${icon} ${styles.icon} ${styles.item}`} />
    <input placeholder={placeholder} id={id} type={type} className={`${styles.item} validate`} />
  </div>);

Section.propTypes = propTypes;

export default Section;
