'use strict';

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _config2.default.port;


_app2.default.listen(port, function () {
  return console.log('server_' + process.env.NODE_ENV + ' :', port);
});
//# sourceMappingURL=index.js.map