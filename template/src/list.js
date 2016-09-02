import psy from 'psydux'


const list = (...items) =>
  psy.el('ul', { class: 'list-group' }, () => items.map(item =>
    psy.el('li', { class: 'list-group-item' }, () => item)))

export default list
