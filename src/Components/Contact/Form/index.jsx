import React from "react";
import PropTypes from "prop-types";
import styles from "./scss/index.scss";
import Section from "./section";
import Button from "./button";
import MessageArea from "./message_area";

const propTypes = {
  handleChange: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const form = ({ handleChange, sendMessage, loading }) => (
  <form
    className={styles.containerform}
    action="https://formspree.io/juansereina@outlook.com"
    method="POST"
  >
    <div className={styles.datamessage}>
      <Section
        id="Name"
        icon="user"
        handleChange={handleChange}
        active={loading}
        name="_name"
        type="text"
      />
      <Section
        id="Email"
        icon="vcard"
        handleChange={handleChange}
        active={loading}
        name="_replyto"
        tye="email"
      />
    </div>
    <div>
      <Section
        id="Subject"
        icon="info"
        handleChange={handleChange}
        active={loading}
        name="_subject"
        type="text"
      />
      <MessageArea loading={loading} handleChange={handleChange} name="_text" type="textarea"/>
      <Button loading={loading} sendMessage={sendMessage} />
    </div>
    <input type="hidden" name="_next" value="#/thanks" />
  </form>
);

form.propTypes = propTypes;

export default form;
