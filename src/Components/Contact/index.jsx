import React, { PureComponent as Component } from 'react';
import FontAwesome from 'react-fontawesome';
import styles from './Contact.css';
import Form from './Form/';
import Map from './Map';
import Helpers from './helpers';

const { isEmpty, api, validateMessageValues } = Helpers;

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
    this.captureMessage = this.captureMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  captureMessage(event) {
    const data = event.target.value;
    const message = { ...this.state.message };
    const name = String(event.target.id);
    message[name] = data;
    this.setState({ message });
  }

  async sendMessage(e) {
    e.preventDefault();
    const message = { ...this.state.message };
    const validResult = await validateMessageValues(message);
    const result = await isEmpty(validResult);
    this.setState({ loading: true });
    api.post(result);
  }

  render() {
    return (
      <div className={`${styles.root} `}>
        <div className={`${styles.sub_root}`}>
          <div className={styles.message}>
            <span className={styles.text}>Send me a <strong>message</strong>!</span>
            <FontAwesome name="thumbs-up" size="2x" className={`${styles.icon} hvr-forward`} />
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
