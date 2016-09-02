import './app.scss'
import container from './container'
import title from './title'
import sub from './sub'
import list from './list'


container(
  title('Hello, Psydux!'),
  sub('To buy'),
  list('eggs', 'milk', 'cheese'),
  sub('To do'),
  list('dishes', 'laundry')
)
