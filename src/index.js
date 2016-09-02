#!/usr/bin/env node

import log from 'gutil-color-log'
import Promise from 'bluebird'
const openAsync = Promise.promisify(require('fs').open)


openAsync('.psydux', 'r')
  .then(() => require('./serve'))
  .catch(e => e.toString().trim().endsWith('open \'.psydux\'') ? require('./scaffold') : log('red', e))
