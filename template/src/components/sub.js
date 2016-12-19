import { el } from 'psydux'


export default function sub(message) {
  return el('p', { class: 'lead' }, function () {
    return message
  })
}


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// export default message => el('p', { class: 'lead' }, () => message)
