import nodeMailer from 'nodemailer';
import config from '../config';

const {
  port,
  service,
  user,
  password,
  domainName,
  keySelector,
  privateKey,
} = config;

const transporter = {}; nodeMailer.createTransport({
  service,
  secure: true,
  port,
  auth: {
    user,
    pass: password,
  },
  dkim: {
    domainName,
    keySelector,
    privateKey,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transporter;
