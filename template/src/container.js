import psy from 'psydux'


const container = (...elements) => psy.el('div', {
  class: 'jumbotron'
}, () => elements)

export default container
