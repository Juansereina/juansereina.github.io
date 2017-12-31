'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodemailerOptions = _config2.default.nodemailerOptions,
    accountNodemailer = _config2.default.accountNodemailer;


var transporter = _nodemailer2.default.createTransport({
  service: nodemailerOptions.service,
  secure: false,
  port: nodemailerOptions.port,
  auth: {
    user: accountNodemailer.user,
    pass: accountNodemailer.password
  },
  dkim: {
    domainName: nodemailerOptions.domainName,
    keySelector: nodemailerOptions.keySelector,
    privateKey: nodemailerOptions.privateKey
  },
  tls: {
    rejectUnauthorized: false
  }
});

exports.default = transporter;
//# sourceMappingURL=mail.js.map