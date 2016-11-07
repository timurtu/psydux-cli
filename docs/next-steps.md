## Next steps

This element is getting pretty big so let's refactor by creating our own functions that return elements. Also let's add some styling.


```javascript
import { el } from 'psydux'


const style = 'margin: 1rem'

const title = msg => el('h1', {
  class: 'display-3',
  style
}, () => msg)

const input = placeholder => el('input', {
  autoFocus: true,
  placeholder,
  class: 'form-control',
  style
})

const button = (type, child) => el('button', {
  class: `btn btn-${type} btn-block`,
  style
}, () => child)

const container = (...elements) => el('div', {
  class: 'container'
}, () => elements)

container(
  title('Todo list'),
  input('Add a new todo!'),
  button('primary', 'Add todo')
)
```

Notice how we are creating reusable functions that return components. This is the key to building apps that scale with Psydux.

Next let's create the list that will hold our todos.

```javascript
import { el } from 'psydux'


const todos = []

const style = 'margin: .25rem'

const container = (...elements) => el('div', {
  class: 'container'
}, () => elements)

const title = msg => el('h1', {
  class: 'display-4',
  style
}, () => msg)

const input = placeholder => el('input', {
  autoFocus: true,
  placeholder,
  class: 'form-control',
  style
})

const button = (type, child) => el('button', {
  class: `btn btn-${type} btn-block`,
  style
}, () => child)

const list = msgs => el('ul', {
  class: 'list-group'
}, () => msgs.map(msg => el('li', {
  class: 'list-group-item'
}, () => msg)))

container(
  title('Todo list'),
  input('Add a new todo!'),
  button('primary', 'Add todo'),
  list(todos)
)
```

You will see that we now have a global reference to a todos variable. This will be used to store todos as strings. To test that this works we will now program the button and submit logic to make this thing work as expected. First, make sure you change our container to a form for easy submits and implement the __addTodo__ function accordingly.

TODO: rest of this guide
