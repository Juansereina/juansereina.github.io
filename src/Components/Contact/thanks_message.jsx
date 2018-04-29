import React from "react";
import Message from "./message";
import styles from './scss/message.scss'
const thanksMessage = () => (
  <div className={styles.root} >
    <Message
      text="Thanks for the message, I'll answer you as soon as possible!"
      icon="thumbs-up"
    />
  </div>
);

export default thanksMessage;
