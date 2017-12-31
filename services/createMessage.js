'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accountNodemailer = _config2.default.accountNodemailer;


var validate = function validate(subject, text) {
  if (!subject || !text) {
    return false;
  }
  return true;
};

var createMessage = function createMessage(sub, txt) {
  return new _promise2.default(function (resolve, reject) {
    var subject = (0, _stringify2.default)(sub);
    var text = (0, _stringify2.default)(txt);

    if (!validate(subject, text)) {
      reject(new Error('Empty Value'));
    }
    var Message = {
      from: '\'Juan Portfolio\' <' + accountNodemailer.user + '>',
      to: '' + accountNodemailer.user,
      subject: subject,
      text: text
    };
    resolve(Message);
  });
};

exports.default = createMessage;
//# sourceMappingURL=createMessage.js.map