import { el } from 'psydux'


export default function title(message) {
  return el('h1', { class: 'display-3' }, function () {
    return message
  })
}


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// export default message => el('h1', { class: 'display-3' }, () => message)
