#!/usr/bin/env node

import Promise from 'bluebird'
const openAsync = Promise.promisify(require('fs').open)


openAsync('.psydux', 'r')
  .then(html => require('./start/start'))
  .catch(e => require('./scaffold/scaffold'))
