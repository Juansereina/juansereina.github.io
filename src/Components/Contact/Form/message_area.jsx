import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import styles from './scss/message.scss';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const meesageArea = ({ loading, handleChange, name, type }) => (
  <div className={`${styles.input}`}>
    <FontAwesome name="comment" className={`${styles.icon} ${styles.item}`} />
    <textarea
      placeholder="Message"
      id="Message"
      className={`materialize-textarea lighten-5 ${styles.item}`}
      onChange={handleChange}
      readOnly={loading}
      name={name}
      type={type}
    />
  </div>
);

meesageArea.propTypes = propTypes;

export default meesageArea;
