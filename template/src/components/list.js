import { el } from 'psydux'


/**
 * @param items - a list of strings that will be displayed
 * on each list item
 * @returns {*} A div tag containing a list of anchor tags
 */
export default function list(...items) {
  return el('div', { class: 'list-group' }, function () {
    return items.map(function (item) {
      return el('a', {
        id: item,
        class: 'list-group-item',
        href: `#${item}`
      }, function () {
        return item
      })
    })
  })
}


// You can always test a function that returns a component simply by
// calling it. Uncomment the line below to try it.

// list('how', 'does', 'this', 'work?')


/**
 * The commented function below is exactly the same
 * as the function above, but with arrow functions.
 */

// export default (...items) =>
//   el('div', { class: 'list-group' }, () => items.map(item =>
//     el('a', { id: item, class: 'list-group-item', href: `#${item}` }, () => item)))
