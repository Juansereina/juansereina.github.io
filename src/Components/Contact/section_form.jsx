import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.css';

const propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const Section = ({
  placeholder,
  id,
  icon,
  handleChange,
}) => (
  <div className={`${styles.input}`}>
    <span className={`fa ${icon} ${styles.icon} ${styles.item}`} />
    <input placeholder={placeholder} id={id} type="text" className={`${styles.item} validate`} onChange={handleChange} />
  </div>);

Section.propTypes = propTypes;

export default Section;
