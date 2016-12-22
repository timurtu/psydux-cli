import { el } from 'psydux'


export default function title(message) {
  return el('h1', function () {
    return message
  }, { class: 'display-3' })
}


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// export default message => el('h1', () => message, { class: 'display-3' })
