const nodeMailer = require('nodemailer');
const { accountNodemailer, nodemailerOptions } = require('../config');

let transporter;

if (!transporter) {
  transporter = nodeMailer.createTransport({
    service: nodemailerOptions.service,
    secure: true,
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
}

module.exports = transporter;
