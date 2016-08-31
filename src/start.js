/**
 * Created by timur on 8/18/16.
 */

// import path from 'path'
import http from 'http'
import Promise from 'bluebird'
import log from 'gutil-color-log'
import { argv } from 'yargs'
const fs = Promise.promisifyAll(require('fs'))
// import WebpackDevServer from 'webpack-dev-server'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpack from 'webpack'

// const compiler = webpack(require(path.join(process.cwd(), '.psydux/webpack.config.js')))


const port = argv.port || argv.p || 8080

// const server = new WebpackDevServer(compiler, {
//   // webpack-dev-server options
//
//   // contentBase: "/.psydux/dist",
//   contentBase: "http://localhost/",
//
//   hot: true,
//   historyApiFallback: false,
//   compress: true,
//   setup: function (app) {
//
//     // app.use(webpackDevMiddleware(compiler, {
//     //   // options
//     // }))
//
//     // app.get('/', function (req, res) {
//     //   res.sendFile(path.join(process.cwd(), '.psydux/dist/index.html'))
//     // })
//   },
//
//   // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
//   staticOptions: {},
//
//   // webpack-dev-middleware options
//   quiet: false,
//   noInfo: false,
//   lazy: true,
//   filename: 'bundle.js',
//   watchOptions: {
//     aggregateTimeout: 300,
//     poll: 1000
//   },
//   publicPath: process.cwd(),
//   headers: { "X-Custom-Header": "yes" },
//   stats: { colors: true }
// });
// server.listen(port, "localhost",  () => {
//   log('cyan', `Open up a web browser and navigate to http://localhost:${port}`)
// })

// const cliRoot = path.join(__dirname, '..')
// const pathToWebpack = path.join(cliRoot, 'node_modules/.bin/webpack')

// execAsync(pathToWebpack, { cwd: process.cwd() })
// .then(out => log('cyan', out)).then(() => )
fs.readFileAsync(`${process.cwd()}/.psydux/dist/index.html`, 'utf8')
.then(html => {

  try {
  
    require('./build')
  
    http.createServer((request, response) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html)
      response.end()
    }).listen(port)
  } catch (e) {
    log('red', e)
  }
  log('cyan', `Open up a web browser and navigate to http://localhost:${port}`)
})
.catch(e => log('red', e))
