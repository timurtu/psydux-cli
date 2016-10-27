import { el } from 'psydux'


const sub = message => el('p', { class: 'lead sub' }, () => message)

export default sub
