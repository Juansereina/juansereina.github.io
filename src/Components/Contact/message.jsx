import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import styles from './scss/message.scss';

const propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Message = ({ text, icon }) => (
  <div className={`${styles.message}`}>
    <span className={styles.text}> {text} </span>
    <FontAwesome name={icon} className={`${styles.icon}`} />
  </div>
);

Message.propTypes = propTypes;

export default Message;

