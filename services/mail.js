'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _createMessage = require('./createMessage');

var _createMessage2 = _interopRequireDefault(_createMessage);

var _sendMessage = require('./sendMessage');

var _sendMessage2 = _interopRequireDefault(_sendMessage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newMessage = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(subject, text) {
    var message, send;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _createMessage2.default)(subject, text);

          case 3:
            message = _context.sent;
            _context.next = 6;
            return (0, _sendMessage2.default)(message);

          case 6:
            send = _context.sent;
            return _context.abrupt('return', send);

          case 10:
            _context.prev = 10;
            _context.t0 = _context['catch'](0);
            return _context.abrupt('return', _context.t0);

          case 13:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 10]]);
  }));

  return function newMessage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var mail = {
  newMessage: newMessage
};
exports.default = mail;
//# sourceMappingURL=mail.js.map