import { render } from 'psydux'
import './styles/main.scss'
import container from './components/container'
import title from './components/title'
import sub from './components/sub'
import list from './components/list'


render(
  container(
    title('Hello, Psydux!'),
    sub('To buy'),
    list('eggs', 'milk', 'cheese'),
    sub('To do'),
    list('dishes', 'laundry')
  )
)
