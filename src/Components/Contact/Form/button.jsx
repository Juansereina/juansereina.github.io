import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import styles from './css/button.css';

const propTypes = {
  loading: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

const button = ({ loading, sendMessage }) => (
  <button className={`${styles.button} btn `} onClick={sendMessage} >
    {loading ? <FontAwesome name="cog" size="3x" spin className={`${styles.loading}`} />
      : <h5 className={styles.textHover} >send</h5>}
  </button>
);

button.propTypes = propTypes;

export default button;