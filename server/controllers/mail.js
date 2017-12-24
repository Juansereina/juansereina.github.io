import nodeMailer from 'nodemailer';
import config from '../config';

const {
  nodemailerOptions,
  accountNodemailer,
} = config;

const transporter = nodeMailer.createTransport({
  service: nodemailerOptions.service,
  secure: false,
  port: nodemailerOptions.port,
  auth: {
    user: accountNodemailer.user,
    pass: accountNodemailer.password,
  },
  dkim: {
    domainName: nodemailerOptions.domainName,
    keySelector: nodemailerOptions.keySelector,
    privateKey: nodemailerOptions.privateKey,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transporter;
