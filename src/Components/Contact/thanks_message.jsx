import React from "react";
import Message from "./message";
import styles from "./scss/message.scss";
import { Animated } from "react-animated-css";

const thanksMessage = () => (
  <Animated className={styles.root}  animationIn="slideInDown" isVisible={true}>
    <Message
      text="Thanks for the message, I'll answer you as soon as possible!"
      icon="thumbs-up"
    />
  </Animated>
);

export default thanksMessage;
