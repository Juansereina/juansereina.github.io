import React, { PureComponent as Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Contact.css';
import Form from './form';
import Map from './Map';

const defaulStstyleIcon = `${styles.icon} hvr-forward`;

const isEmpty = (str) => {
  let empty = true;
  const values = Object.values(str);
  values.forEach((val) => {
    if (!val.trim()) empty = false;
  });
  return empty;
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
    this.state = { loading: true };
    this.captureMessage = this.captureMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  captureMessage(event) {
    const data = event.target.value;
    const message = { ...this.state.message };
    switch (event.target.id) {
      case 'name':
        message.name = data;
        break;
      case 'email':
        message.email = data;
        break;
      case 'subject':
        message.subject = data;
        break;
      case 'textarea':
        message.textarea = data;
        break;
      default:
        break;
    }
    this.setState({ message });
  }

  sendMessage(e) {
    e.preventDefault();

    const message = { ...this.state.message };
    if (validate(message)) {
      this.setState({ loading: true });
      fetch('/api/send', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify(message),
      }).then(() => this.setState({ loading: false }))
        .catch(err => (err));
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
          <Form
            handleChange={this.captureMessage}
            sendMessage={this.sendMessage}
            loading={this.state.loading}
          />
        </div>
        <Map />
      </div>);
  }
}

export default Contact;
