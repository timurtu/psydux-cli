import psy from 'psydux'

const createHeader = message => psy.el('h1', {
  class: 'display-3'
}, () => message)

const createSubHeader = message => psy.el('p', {
  class: 'lead'
}, () => message)

const createList = (...items) => psy.el('ul', {
  class: 'list-group'
}, () => items.map(item => psy.el('li', {
  class: 'list-group-item'
}, () => item)))

const createContainer = (...elements) => psy.el('div', {
  class: 'jumbotron'
}, () => elements)

createContainer(
  createHeader('Hello, World!'),
  createSubHeader('Here is where you would put some content'),
  createList('how', 'are', 'you', 'doing', 'today?')
)
