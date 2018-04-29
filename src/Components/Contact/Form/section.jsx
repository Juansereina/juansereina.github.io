import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styles from './scss/section.scss';

const propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const Section = ({
  id,
  icon,
  active,
  handleChange,
  name,
  type
}) => (
  <div className={`${styles.input}`}>
    <FontAwesome name={icon} className={`${styles.icon} ${styles.item}`} />
    <input 
    placeholder={id} 
    id={id} 
    type={type}
    className={`${styles.item} validate`} 
    onChange={handleChange} 
    readOnly={active} 
    name={name} />
  </div>);

Section.propTypes = propTypes;

export default Section;
