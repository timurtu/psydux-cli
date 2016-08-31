import psy from 'psydux'


const sub = message => psy.el('p', {
  class: 'lead'
}, () => message)

export default sub
