'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use((0, _helmet2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());
var env = process.env.NODE_ENV || 'dev';
var DIST_DIR = _path2.default.join(__dirname, '../dist');
if (env === 'production') {
  DIST_DIR = _path2.default.join(__dirname, './dist');
}
app.use(_express2.default.static(DIST_DIR));
app.use('/api', _routes2.default);
app.get('*', function (req, res) {
  res.redirect('/');
});
exports.default = app;
//# sourceMappingURL=app.js.map