'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _gutilColorLog = require('gutil-color-log');

var _gutilColorLog2 = _interopRequireDefault(_gutilColorLog);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by timur on 8/19/16.
 */

var fs = _bluebird2.default.promisifyAll(require('fs'));
var execAsync = _bluebird2.default.promisify(require('child_process').exec);

var args = process.argv.slice(2);

function checkArgs() {

  if (!args[0] || args[1]) {
    (0, _gutilColorLog2.default)('red', 'Invalid number of arguments. Usage: psydux (name-of-app)');
  } else {
    return true;
  }
}

if (checkArgs()) {
  (function () {

    var appName = args[0];
    var appDir = _path2.default.join(process.cwd(), appName);
    var templateDir = _path2.default.join(__dirname, '..', 'template');

    (0, _gutilColorLog2.default)('cyan', 'Creating psydux app at ' + appDir);

    _gulp2.default.src(_path2.default.join(templateDir, '**/*'), { dot: true }).pipe(_gulp2.default.dest(appDir));

    var dependencies = ['psydux', 'babel-preset-es2015', 'babel-preset-es2016', 'webpack', 'webpack-dev-server', 'babel-core', 'babel-loader', 'url-loader', 'file-loader', 'css-loader', 'node-sass', 'sass-loader'];

    fs.mkdirAsync(appDir).then(function () {
      return execAsync('npm init -y', { cwd: appDir });
    }).then(function () {
      return (0, _gutilColorLog2.default)('cyan', 'Installing dependencies...');
    }).then(function () {
      return execAsync('npm install -D ' + dependencies.join(' '), { cwd: appDir });
    }).then(function () {
      (0, _gutilColorLog2.default)('green', 'New application created successfully.');
      (0, _gutilColorLog2.default)('cyan', 'Enter the following commands to start the app.');
      (0, _gutilColorLog2.default)('yellow', 'cd ' + appName);
      (0, _gutilColorLog2.default)('yellow', 'psydux');
    }).catch(function (e) {
      return (0, _gutilColorLog2.default)('red', e);
    });
  })();
}