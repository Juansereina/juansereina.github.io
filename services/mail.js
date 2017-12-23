const nodeMailer = require('nodemailer');
const { accountNodemailer } = require('../config');

const transporter = nodeMailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: accountNodemailer.user,
    pass: accountNodemailer.password,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const HelperOptions = {
  from: `'Juan Portfolio' <${accountNodemailer.user}>`,
  to: `${accountNodemailer.user}`,
  subject: 'Hello world',
  text: 'Hiiiiiiiiii',
};

const send = () => transporter.sendMail(HelperOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('The message was sent!');
  console.log(info);
  return true;
});

module.exports = send;
