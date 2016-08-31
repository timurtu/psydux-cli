/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import log from 'gutil-color-log'
import paths from './paths'
import Promise from 'bluebird'
const execAsync = Promise.promisify(require('child_process').exec)

execAsync(path.join(paths.bin(), 'webpack'))
  .then(out => /ERROR/.test(out) ? log('red', out) : log('green', out))
  .catch(e => log('red', e))
