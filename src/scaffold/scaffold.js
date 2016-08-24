/**
 * Created by timur on 8/19/16.
 */

import path from 'path'
import log from 'gutil-color-log'
import Promise from 'bluebird'
const fs = Promise.promisifyAll(require('fs'))
const execAsync = Promise.promisify(require('child_process').exec)


const args = process.argv.slice(2)

if (checkArgs()) {
  
  const appName = args[0]
  const appDir = path.join(process.cwd(), appName)
  const templateDir = path.join(__dirname, '../..', 'template')
  
  log('blue', `Scaffolding new application to ${appDir}`)
  
  fs.mkdirAsync(appDir)
    .then(() => fs.readdirAsync(templateDir))
    .then(dirs => dirs.map(dir => {
      fs.mkdirAsync(path.join(appDir, dir))
      return dir
    }))
    .then(dirs => dirs.map(dir => {
      fs.readdirAsync(path.join(templateDir, dir))
        .then(files => files.map(file => fs.readFileAsync(path.join(templateDir, dir, file))
          .then(content => fs.writeFileAsync(path.join(appDir, dir, file), content))))
    }))
    .then(() => execAsync('npm init -y', { cwd: appDir }))
    .then(() => execAsync('npm install -D psydux', { cwd: appDir }))
    .then(() => {
      log('green', 'New application created successfully.')
      log('cyan', 'Enter the following commands to start the app.')
      log('yellow', `cd ${appName}`)
      log('yellow', 'psydux')
    })
    .catch(e => log('red', e))
}

function checkArgs() {
  
  if (!args[0] || args[1]) {
    log('red', 'Invalid number of arguments. Usage: psydux (name-of-app)')
  } else {
    return true
  }
}
