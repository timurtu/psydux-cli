import { el } from 'psydux'


/**
 * @param items - a list of strings that will be displayed
 * on each list item
 * @returns {*} A div tag containing a list of anchor tags
 */
export default function list(...items) {
  return el('div', function () {
    return items.map(function (item) {
      return el('a', function () {
        return item
      }, {
        id: item,
        class: 'list-group-item',
        href: `#${item}`
      })
    })
  }, { class: 'list-group' })
}


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// export default (...items) =>
//   el('div', () => items.map(item =>
//     el('a', () => item, { id: item, class: 'list-group-item', href: `#${item}` })), { class: 'list-group' })
