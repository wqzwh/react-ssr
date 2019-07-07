import Loadable from 'react-loadable'
import LoadingComponent from '../components/loading'
import { getInitData } from '../store/home/sagas'

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

Home.loadData = serverConfig => {
  const params = {
    page: 1
  }
  return getInitData(serverConfig, params)
}

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
