import React, { PureComponent as Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './scss/contact.scss';
import Form from './Form/';
import Helpers from './Helpers';
import animate from '../Common/animate.scss';
import Message from './message';

const notify = message => toast.info(message, { position: 'top-left' });
const notifyError = message => toast.error(message, { position: 'top-left' });

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      animation: `${animate.animated} ${animate.fadeInDown}`,
      feedbackAnimation: `${animate.animated} ${animate.fadeInLeft}`,
    };
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

  async sendMessage(e, context) {
    e.preventDefault();
    const { message } = this.state;   
    try {
      const validResult = await Helpers.validateMessageValues(message);
      const result = await Helpers.isEmpty(validResult);
      context.current.submit();
      this.setState({ loading: true });     
    } catch (err) {      
      notify(err.message);
    }
  }
  renderForm() {
    return (
      <div className={`${styles.subroot} ${this.state.animation}`}>
        <Message text="Send me a message!" icon="hand-peace-o" />
        <Form
          handleChange={this.captureMessage}
          sendMessage={this.sendMessage}
          loading={this.state.loading}
        />
      </div>
    );
  }

  render() {
    return (
      <div className={`${styles.root} `}>
        {this.renderForm()}
        <ToastContainer newestOnTop />
      </div>);
  }
}

export default Contact;
