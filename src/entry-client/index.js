import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import Loadable from 'react-loadable'
import { configureClientStore } from '../store/index'
import routes from '../router'
import rootSaga from '../store/rootSagas'

const store = configureClientStore()
store.runSaga(rootSaga)

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>{renderRoutes(routes)}</Fragment>
      </BrowserRouter>
    </Provider>
  )
}
Loadable.preloadReady().then(() => {
  ReactDom.hydrate(<App />, document.getElementById('root'))
})
// ReactDom.hydrate(<App />, document.getElementById('root'))
