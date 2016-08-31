'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paths = {
  root: process.cwd(),
  src: function src() {
    return _path2.default.join(this.root, 'src');
  },
  dist: function dist() {
    return _path2.default.join(this.root, '.psydux/dist');
  },
  bin: function bin() {
    return _path2.default.join(this.root, 'node_modules/.bin');
  }
}; /**
    * Created by timur on 8/31/16.
    */

exports.default = paths;