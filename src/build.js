/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import gulp from 'gulp'
import log from 'gutil-color-log'
import paths from './paths'
import Promise from 'bluebird'
const execAsync = Promise.promisify(require('child_process').exec)


const build = () => execAsync(path.join(paths.bin(), 'webpack'))
  .then(out => /ERROR/.test(out) ? log('red', out) : log('cyan', `New bundle built to ${paths.dist()}`))
  .catch(e => log('red', e))

gulp.watch(path.join(paths.src(), '**/*'), build)

build()
