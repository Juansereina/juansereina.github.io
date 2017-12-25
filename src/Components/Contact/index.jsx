import React, { PureComponent as Component } from 'react';
import styles from './css/Contact.css';
import Form from './Form/';
import Map from './Map';
import Helpers from './helpers';
import animate from '../Common/animate.css';
import Message from './message';

const { isEmpty, post, validateMessageValues } = Helpers;

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      animation: `${animate.animated} ${animate.fadeInDown}`,
      feedbkackAnimation: `${animate.animated} ${animate.fadeInLeft}`,
      feedback: false,
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

  async sendMessage(e) {
    e.preventDefault();
    const context = this;
    const message = { ...this.state.message };
    const validResult = await validateMessageValues(message);
    const result = await isEmpty(validResult);
    this.setState({ loading: true });
    await post(result).then(() => {
      context.setState({
        loading: false,
        animation: `${animate.animated} ${animate.fadeOutRight}`,
      });
      setTimeout(() => {
        context.setState({
          feedback: true,
        });
      }, 1000);
    })
      .catch(err => err);
  }

  messageFeedBack() {
    return (
      <div className={`${styles.sub_root} ${this.state.feedbkackAnimation}`}>
        <Message text="Thanks for the message, I'll answer you as soon as possible!" icon="thumbs-up" />
      </div>);
  }
  renderForm() {
    return (
      <div className={`${styles.sub_root} ${this.state.animation}`}>
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
        {!this.state.feedback && this.renderForm()}
        {this.state.feedback && this.messageFeedBack()}
        <Map />
      </div>);
  }
}

export default Contact;
