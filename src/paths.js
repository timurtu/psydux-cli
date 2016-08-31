/**
 * Created by timur on 8/31/16.
 */

import path from 'path'


const paths = {
  root: process.cwd(),
  src: function () {
    return path.join(this.root, 'src')
  },
  dist: function () {
    return path.join(this.root, '.psydux/dist')
  }
}

export default paths
