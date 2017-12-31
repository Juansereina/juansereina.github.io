'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _services = require('../services');

var _services2 = _interopRequireDefault(_services);

var _middlewares = require('../middlewares');

var _middlewares2 = _interopRequireDefault(_middlewares);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = _express2.default.Router();
var mail = _services2.default.mail;
var validateMessage = _middlewares2.default.mail.validateMessage;


api.post('/send', validateMessage, function (req, res) {
  var subject = req.body.subject;

  var text = req.body;
  mail.newMessage(subject, text).then(function () {
    res.send('Message sent!');
  });
});

api.get('/server', function (req, res) {
  res.send('server working :)');
});

exports.default = api;
//# sourceMappingURL=index.js.map