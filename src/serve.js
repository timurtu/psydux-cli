/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import log from 'gutil-color-log'
import { argv } from 'yargs'
import express from 'express'
import paths from './paths'
require('./build')


const port = argv.port || argv.p || 8080
const app = express()

app.use(express.static(path.join(paths.dist())))

app.get('/', (req, res) => {
  res.sendFile(path.join(paths.dist(), 'index.html'))
})

app.listen(port, () => {
  log('cyan', `Open up a web browser to http://localhost:${port}`)
})
