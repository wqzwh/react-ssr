// import App from '../App'
// import Home from '../views/home'
// import NotFound from '../views/notFound'
// import loadable from '../public/utils/react-utils'
import Loadable from 'react-loadable'
import LoadingComponent from '../components/loading'

// const App = loadable(() => import('../App'), '../App')
// const Home = loadable(() => import('../views/home'))
// const NotFound = loadable(() => import('../views/notFound'))

const App = Loadable({
  loader: () => import('../App'),
  modules: ['../App'],
  webpack: () => [require.resolveWeak('../App')],
  loading: LoadingComponent
})

const Home = Loadable({
  loader: () => import('../views/Home'),
  modules: ['../views/Home'],
  webpack: () => [require.resolveWeak('../views/Home')],
  loading: LoadingComponent
})

const NotFound = Loadable({
  loader: () => import('../views/NotFound'),
  modules: ['../views/NotFound'],
  webpack: () => [require.resolveWeak('../views/NotFound')],
  loading: LoadingComponent
})

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
