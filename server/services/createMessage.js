import config from '../config';

const {
  accountNodemailer,
} = config;

const validate = (subject, text) => {
  if (!subject || !text) {
    return false;
  }
  return true;
};

const createMessage = (sub, txt) =>
  new Promise((resolve, reject) => {
    const subject = JSON.stringify(sub);
    const text = JSON.stringify(txt);

    if (!validate(subject, text)) {
      reject(new Error('Empty Value'));
    }
    const Message = {
      from: `'Juan Portfolio' <${accountNodemailer.user}>`,
      to: `${accountNodemailer.user}`,
      subject,
      text,
    };
    resolve(Message);
  });

export default createMessage;
