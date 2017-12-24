import React from 'react';
import PropTypes from 'prop-types';
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
      <Section placeholder="Name" id="name" icon="fa-user" handleChange={handleChange} />
      <Section placeholder="Email" id="email" icon="fa-vcard" handleChange={handleChange} />
    </div>
    <div className={styles.content_message}>
      <Section placeholder="Subject" id="subject" icon="fa-info" handleChange={handleChange} />
      <div className={`${styles.input}`}>
        <span className={`fa fa-comment ${styles.icon} ${styles.item}`} />
        <textarea
          placeholder="Message"
          id="textarea"
          className={`materialize-textarea lighten-5 ${styles.item}`}
          onChange={handleChange}
        />
      </div>
    </div>
    <button className={`${styles.button} btn white-text `} name="action" onClick={sendMessage} >
      {loading ? <span className={`fa  fa-cog ${styles.icon} ${styles.item} fa-spin fa-2x`} />
      : <span className={`fa ${styles.icon}`} >send</span>}
    </button>
  </form>);

form.propTypes = propTypes;

export default form;
