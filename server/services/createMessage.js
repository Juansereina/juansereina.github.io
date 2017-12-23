const { accountNodemailer } = require('../config');

const validate = (subject, text) => {
  if (!subject || !text) {
    return false;
  }
  return true;
};

const createMessage = (subject, text) =>
  new Promise((resolve, reject) => {
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

module.exports = createMessage;
