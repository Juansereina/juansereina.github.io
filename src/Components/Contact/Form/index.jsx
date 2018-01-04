import React from 'react';
import PropTypes from 'prop-types';
import styles from './scss/index.scss';
import Section from './section';
import Button from './button';
import MessageArea from './message_area';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const form = ({ handleChange, sendMessage, loading }) => (
  <form className={styles.containerform}>
    <div className={styles.datamessage}>
      <Section id="Name" icon="user" handleChange={handleChange} active={loading} />
      <Section id="Email" icon="vcard" handleChange={handleChange} active={loading} />
    </div>
    <div>
      <Section id="Subject" icon="info" handleChange={handleChange} active={loading} />
      <MessageArea loading={loading} handleChange={handleChange} />
      <Button loading={loading} sendMessage={sendMessage} />
    </div>
  </form>
);

form.propTypes = propTypes;

export default form;
