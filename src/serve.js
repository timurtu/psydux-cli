/**
 * Created by timur on 8/31/16.
 */

import path from 'path'
import express from 'express'
import paths from './paths'
import './build'
import { port } from './config'


const app = express()

app.use(express.static(path.join(paths.dist())))

app.get('/', (req, res) => {
  res.sendFile(path.join(paths.dist(), 'index.html'))
})

app.listen(port)
