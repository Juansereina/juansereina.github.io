'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _mail = require('../controllers/mail');

var _mail2 = _interopRequireDefault(_mail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var send = function send(Message) {
  return new _promise2.default(function (resolve, reject) {
    _mail2.default.sendMail(Message, function (error, info) {
      if (error) {
        reject(error);
      }
      resolve(info);
    });
  });
};

exports.default = send;
//# sourceMappingURL=sendMessage.js.map