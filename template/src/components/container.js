import { el } from 'psydux'


export default function container(...elements) {
  return el('div', function () {
    return elements
  }, { class: 'well' })
}


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// export default (...elements) => el('div', () => elements, { class: 'well' })
