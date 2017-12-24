import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styles from './Contact.css';
import Section from './section_form';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const form = ({ handleChange, sendMessage, loading }) => (
  <form className={styles.containerForm}>
    <div className={styles.data_message}>
      <Section placeholder="Name" id="name" icon="user" handleChange={handleChange} active={loading} />
      <Section placeholder="Email" id="email" icon="vcard" handleChange={handleChange} active={loading} />
    </div>
    <div className={styles.content_message}>
      <Section placeholder="Subject" id="subject" icon="info" handleChange={handleChange} active={loading} />
      <div className={`${styles.input}`}>
        <FontAwesome name="comment" className={`${styles.icon} ${styles.item}`} />
        <textarea
          placeholder="Message"
          id="textarea"
          className={`materialize-textarea lighten-5 ${styles.item}`}
          onChange={handleChange}
          readOnly={loading}
        />
      </div>
    </div>
    <button className={`${styles.button} btn `} name="action" onClick={sendMessage} >
      {loading ? <FontAwesome name="cog" size="3x" spin className={`${styles.loading}`} />
      : <h5 className={styles.textHover} >send</h5>}
    </button>
  </form>);

form.propTypes = propTypes;

export default form;
