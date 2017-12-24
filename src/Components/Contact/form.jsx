import React from 'react';
import styles from './Contact.css';
import Section from './section_form';

const form = () => (
  <form className={styles.containerForm}>
    <div className={styles.data_message}>
      <Section placeholder="Name" id="name" type="text" icon="fa-user" />
      <Section placeholder="Email" id="email" type="text" icon="fa-vcard" />
    </div>
    <div className={styles.content_message}>
      <Section placeholder="Subject" id="subject" type="text" icon="fa-info" />
      <div className={`${styles.input}`}>
        <span className={`fa fa-comment ${styles.icon} ${styles.item}`} />
        <textarea placeholder="Message" id="textarea" className="materialize-textarea lighten-5" />
      </div>
    </div>
    <button className={`${styles.button} btn white-text `} type="submit" name="action">
      <span>Send</span>
    </button>
  </form>);

export default form;
