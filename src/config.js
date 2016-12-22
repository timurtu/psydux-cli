/**
 * Created by timur on 12/21/2016.
 */

import { argv } from 'yargs'

export const port = argv.port || argv.p || process.env.PORT || 8080
