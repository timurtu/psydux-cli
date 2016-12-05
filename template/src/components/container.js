import { el } from 'psydux'


export default function container(...elements) {
  return el('div', { class: 'well' }, function () {
    return elements
  })
}


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// const container = (...elements) => el('div', { class: 'well' }, () => elements)
//
// export default container
