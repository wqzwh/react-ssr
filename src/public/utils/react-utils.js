import Loadable from 'react-loadable'
import LoadingComponent from '../../components/loading'

export default (loader, comUrl, loading = LoadingComponent) => {
  return Loadable({
    loader,
    modules: [comUrl],
    webpack: () => [require.resolveWeak(comUrl)],
    loading
  })
}
