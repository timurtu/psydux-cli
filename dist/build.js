'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gutilColorLog = require('gutil-color-log');

var _gutilColorLog2 = _interopRequireDefault(_gutilColorLog);

var _paths = require('./paths');

var _paths2 = _interopRequireDefault(_paths);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var execAsync = _bluebird2.default.promisify(require('child_process').exec); /**
                                                                              * Created by timur on 8/31/16.
                                                                              */

var build = function build() {
  return execAsync(_path2.default.join(_paths2.default.bin(), 'webpack')).then(function (out) {
    return (/ERROR/.test(out) ? (0, _gutilColorLog2.default)('red', out) : (0, _gutilColorLog2.default)('cyan', 'New bundle built to ' + _paths2.default.dist())
    );
  }).catch(function (e) {
    return (0, _gutilColorLog2.default)('red', e);
  });
};

_gulp2.default.watch(_path2.default.join(_paths2.default.src(), '**/*'), build);

build();