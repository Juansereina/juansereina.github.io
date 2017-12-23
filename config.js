
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;
const accountNodemailer = {
  user: process.env.ACCOUNT_NODEMAILER,
  password: process.env.PASSWORD_NODEMAILER,
};

module.exports = {
  port,
  accountNodemailer,
};
