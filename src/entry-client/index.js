import React, { Fragment } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { configureClientStore } from '../store/index'
import routes from '../router'
import rootSaga from '../store/rootSagas'

const store = configureClientStore()
store.runSaga(rootSaga)

const APP = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>{renderRoutes(routes)}</Fragment>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<APP />, document.getElementById('root'))
