/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import gulp from 'gulp'
import log from 'gutil-color-log'
<<<<<<< HEAD
import paths from './paths'
import {port} from './config'
=======
>>>>>>> 116161cea093c7848f555d083349e64e1fd1278b
import Promise from 'bluebird'
const execAsync = Promise.promisify(require('child_process').exec)
import paths from './paths'


const build = () => execAsync(path.join(paths.bin(), 'webpack'))
  .then(out => /ERROR/.test(out) ? log('red', out) : log('cyan', `New bundle built to ${paths.dist()}`))
  .catch(e => log('red', e))

gulp.watch(path.join(paths.src(), '**/*'), build)

<<<<<<< HEAD
build()
  .then(() => log('cyan', `Open up a web browser to http://localhost:${port}`))
=======
build().then(() => require('./port')
  .then(port => log('cyan', `Open up a web browser to http://localhost:${port}`)))
>>>>>>> 116161cea093c7848f555d083349e64e1fd1278b
