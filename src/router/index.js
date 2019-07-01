import App from '../App'
import Home from '../views/home'
import NotFound from '../components/notFound'

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home'
      },
      {
        component: NotFound,
        key: 'notFound'
      }
    ]
  }
]
