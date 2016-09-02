/**
 * Created by timur on 8/19/16.
 */

import gulp from 'gulp'
import path from 'path'
import log from 'gutil-color-log'
import Promise from 'bluebird'
const fs = Promise.promisifyAll(require('fs'))
const execAsync = Promise.promisify(require('child_process').exec)


const args = process.argv.slice(2)

function checkArgs() {
  
  if (!args[0] || args[1]) {
    log('yellow', 'Invalid number of arguments. Usage: psydux (name-of-app)')
  } else {
    return true
  }
}

if (checkArgs()) {
  
  const appName = args[0]
  const appDir = path.join(process.cwd(), appName)
  const templateDir = path.join(__dirname, '..', 'template')
  
  log('cyan', `Creating psydux app at ${appDir}`)
  
  gulp.src(path.join(templateDir, '**/*'), { dot: true })
    .pipe(gulp.dest(appDir))
  
  const dependencies = [
    'psydux',
    'babel-preset-es2015',
    'babel-preset-es2016',
    'webpack',
    'webpack-dev-server',
    'babel-core',
    'babel-loader',
    'url-loader',
    'file-loader',
    'css-loader',
    'style-loader',
    'node-sass',
    'sass-loader',
  ]
  
  fs.mkdirAsync(appDir)
    .then(() => execAsync('npm init -y', { cwd: appDir }))
    .then(() => log('cyan', 'Installing dependencies...'))
    .then(() => execAsync(`npm install -D ${dependencies.join(' ')}`, { cwd: appDir }))
    .then(() => {
      log('green', 'New application created successfully.')
      log('cyan', 'Enter the following commands to start the app.')
      log('yellow', `cd ${appName}`)
      log('yellow', 'psydux')
    })
    .catch(e => log('red', e))
}
