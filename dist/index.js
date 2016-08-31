#!/usr/bin/env node
'use strict';

var _gutilColorLog = require('gutil-color-log');

var _gutilColorLog2 = _interopRequireDefault(_gutilColorLog);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var openAsync = _bluebird2.default.promisify(require('fs').open);

openAsync('.psydux', 'r').then(function (html) {
  return require('./serve');
}).catch(function (e) {
  if (e.toString().trim().endsWith('open \'.psydux\'')) {
    require('./scaffold');
  } else {
    (0, _gutilColorLog2.default)('red', e);
  }
});