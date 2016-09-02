import psy from 'psydux'


const sub = message => psy.el('p', {
  class: 'lead sub'
}, () => message)

export default sub
