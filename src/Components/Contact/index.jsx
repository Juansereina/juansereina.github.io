import React from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Contact.css';
import Form from './form';
import Map from './Map';

const defaulStstyleIcon = `${styles.icon} hvr-forward`;

const Contact = () => (
  <div className={`${styles.root} `}>
    <div className={`${styles.sub_root}`}>
      <div className={styles.message}>
        <span className={styles.text}>Send me a <strong>message</strong>!</span>
        <FontAwesome name="thumbs-up" size="2x" className={defaulStstyleIcon} />
      </div>
      <Form />
    </div>
    <Map />
  </div>);

export default Contact;
