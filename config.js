'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var port = process.env.PORT || 8080;
var accountNodemailer = {
  user: process.env.ACCOUNT_NODEMAILER,
  password: process.env.PASSWORD_NODEMAILER
};
var nodemailerOptions = {
  service: process.env.SERVICE_NODEMAILER,
  port: process.env.PORT_NODEMAILER,
  domainName: process.env.DOMAINNAME_NODEMAILER,
  keySelector: process.env.KEYSELECTOR_NODEMAILER,
  privateKey: process.env.PRIVATEKEY_NODEMAILER
};

exports.default = {
  port: port,
  accountNodemailer: accountNodemailer,
  nodemailerOptions: nodemailerOptions
};
//# sourceMappingURL=config.js.map