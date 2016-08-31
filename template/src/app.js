import container from './container'
import title from './title'
import sub from './sub'
import list from './list'


container(
  title('Hello, World!'),
  sub('Here is where you would put some content'),
  list('how', 'are', 'you', 'doing', 'today?')
)
