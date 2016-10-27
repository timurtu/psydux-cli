import { el } from 'psydux'


const title = message => el('h1', { class: 'display-3' }, () => message)

export default title
