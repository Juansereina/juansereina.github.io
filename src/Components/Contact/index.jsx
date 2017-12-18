import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Contact.css';
import Map from './Map';

const defaulStstyleIcon = `${styles.icon} hvr-forward`;

const Contact = () => (
  <div className={`${styles.root} `}>
    <div className={`${styles.sub_root}`}>
      <div className={styles.message}>
        <span className={styles.text}>Send me a <strong>message</strong>!</span>
        <FontAwesome name="thumbs-up" size="2x" className={defaulStstyleIcon} />
      </div>
      <form className={styles.containerForm}>
        <div className={styles.data_message}>
          <div className={`${styles.input}`}>
            <span className={`fa fa-user ${styles.icon} ${styles.item}`} />
            <input placeholder="Name" id="name" type="text" className={`${styles.item} validate`} />
          </div>
          <div className={`${styles.input}`}>
            <span className={`fa fa-vcard ${styles.icon} ${styles.item}`} />
            <input
              placeholder="Email"
              id="email"
              type="text"
              className={`${styles.item} validate`}
            />
          </div>
        </div>
        <div className={styles.content_message}>
          <div className={`${styles.input}`}>
            <span className={`fa fa-info ${styles.icon} ${styles.item}`} />
            <input placeholder="Subject" id="subject" type="text" className="validate" />
          </div>
          <div className={`${styles.input}`}>
            <span className={`fa fa-comment ${styles.icon} ${styles.item}`} />
            <textarea
              placeholder="Message"
              id="textarea"
              className="materialize-textarea lighten-5 "
            />
          </div>
        </div>
        <button
          className={`${styles.button} btn white-text `}
          type="submit"
          name="action"
        >
          <span>Send</span>
        </button>
      </form>
    </div>
    <Map />
  </div>);

export default Contact;
