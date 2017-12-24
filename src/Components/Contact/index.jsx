import React, { PureComponent as Component } from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
import styles from './Contact.css';
import Form from './form';
import Map from './Map';

const defaulStstyleIcon = `${styles.icon} hvr-forward`;

const isEmpty = (str) => {
  let state = true;
  const values = Object.values(str);
  values.forEach((val) => {
    if (!val.trim()) state = false;
  });
  return state;
};

const validate = (message) => {
  if (!message.name || !message.email || !message.subject || !message.textarea) {
    return false;
  }
  return isEmpty(message);
};

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.captureMessage = this.captureMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }
  captureMessage(event) {
    const data = event.target.value;
    switch (event.target.id) {
      case 'name':
        this.setState({ name: data });
        break;
      case 'email':
        this.setState({ email: data });
        break;
      case 'subject':
        this.setState({ subject: data });
        break;
      case 'textarea':
        this.setState({ textarea: data });
        break;
      default:
        break;
    }
  }

  sendMessage(e) {
    e.preventDefault();
    const message = { ...this.state };
    if (validate(message)) {
      const data = new FormData();
      data.append('json', JSON.stringify(message));
      fetch('/api/send', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(message),
      }).then(response => console.log(response))
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <div className={`${styles.root} `}>
        <div className={`${styles.sub_root}`}>
          <div className={styles.message}>
            <span className={styles.text}>Send me a <strong>message</strong>!</span>
            <FontAwesome name="thumbs-up" size="2x" className={defaulStstyleIcon} />
          </div>
          <Form handleChange={this.captureMessage} sendMessage={this.sendMessage} />
        </div>
        <Map />
      </div>);
  }
}

export default Contact;
