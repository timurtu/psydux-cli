import psy from 'psydux'


const title = message => psy.el('h1', {
  class: 'display-3'
}, () => message)

export default title
