'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var validateMessage = function validateMessage(req, res, next) {
  var message = req.body;
  if (message) {
    return next();
  }
  return res.status(300).send('Empty value');
};

exports.default = {
  validateMessage: validateMessage
};
//# sourceMappingURL=mail.js.map