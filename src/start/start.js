/**
 * Created by timur on 8/18/16.
 */

import http from 'http'
import Promise from 'bluebird'
import log from 'gutil-color-log'
const fs = Promise.promisifyAll(require('fs'))


fs.readFileAsync(`${process.cwd()}/.psydux/index.html`, 'utf8')
  .then(html => {
    const port = 8080
    
    http.createServer((request, response) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html)
      response.end()
    }).listen(port)
    
    log('cyan', `Open up a web browser and navigate to http://localhost:${port}`)
  })
  .catch(e => log('red', e))

