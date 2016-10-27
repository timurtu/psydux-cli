import { el } from 'psydux'


const list = (...items) =>
  el('ul', { class: 'list-group' }, () => items.map(item =>
    el('li', { class: 'list-group-item' }, () => item)))

export default list
