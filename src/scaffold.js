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
    log('cyan', 'Usage: psydux (name-of-app)')
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

  const devDependencies = [
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

  const scripts = {
    start: 'psydux'
  }

  const packageJson = {
    name: appName,
    version: '0.0.0',
    description: 'Psydux application',
    main: '.psydux/dist/bundle.js',
    keywords: [],
    author: '',
    license: 'UNLICENSED',
    scripts
  }

  fs.mkdirAsync(appDir)
    .then(() => fs.writeFileAsync(path.join(appDir, 'package.json'), JSON.stringify(packageJson, null, 2)))
    .then(() => log('cyan', 'Installing development dependencies...'))
    .then(() => execAsync(`npm install -D ${devDependencies.join(' ')}`, { cwd: appDir }))
    .then(() => {
      log('green', 'New application created successfully.')
      log('cyan', 'Enter the following commands to start the app.')
      log('yellow', `cd ${appName}`)
      log('yellow', 'psydux')
    })
    .catch(e => log('red', e))
}
