/**
 * Created by timur on 12/21/16.
 */

import { argv } from 'yargs'
import detect from 'detect-port'
import log from 'gutil-color-log'


const port = argv.port || argv.p || process.env.PORT || 3000

module.exports = (
  detect(port)
    .then(_port => port === _port ? port : _port)
    .catch(e => log('red', e))
)
