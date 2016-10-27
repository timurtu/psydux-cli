import { el } from 'psydux'


const container = (...elements) => el('div', { class: 'jumbotron' }, () => elements)

export default container
