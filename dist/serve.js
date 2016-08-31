'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gutilColorLog = require('gutil-color-log');

var _gutilColorLog2 = _interopRequireDefault(_gutilColorLog);

var _yargs = require('yargs');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./build'); /**
                     * Created by timur on 8/31/16.
                     */

var port = _yargs.argv.port || _yargs.argv.p || 8080;
var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(_paths2.default.dist())));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(_paths2.default.dist(), 'index.html'));
});

app.listen(port, function () {
  (0, _gutilColorLog2.default)('cyan', 'Open up a web browser to http://localhost:' + port);
});