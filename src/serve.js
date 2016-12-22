/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import express from 'express'
import log from 'gutil-color-log'
import paths from './paths'
import './build'
import { port } from './config'


const app = express()

app.use(express.static(path.join(paths.dist())))

app.get('/', (req, res) => {
  res.sendFile(path.join(paths.dist(), 'index.html'))
})

<<<<<<< HEAD
app.listen(port)
=======
require('./port')
  .then(port => {
    log('cyan', `Psydux development server listening on port ${port}\n\n`)
    app.listen(port)
  })
>>>>>>> 116161cea093c7848f555d083349e64e1fd1278b
