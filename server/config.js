
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 8080;
const accountNodemailer = {
  user: process.env.ACCOUNT_NODEMAILER,
  password: process.env.PASSWORD_NODEMAILER,
};
const nodemailerOptions = {
  service: process.env.SERVICE_NODEMAILER,
  port: process.env.PORT_NODEMAILER,
  domainName: process.env.DOMAINNAME_NODEMAILER,
  keySelector: process.env.KEYSELECTOR_NODEMAILER,
  privateKey: process.env.PRIVATEKEY_NODEMAILER,
};

const env = process.env.NODE_ENV || 'dev';

module.exports = {
  port,
  accountNodemailer,
  nodemailerOptions,
  env
};

