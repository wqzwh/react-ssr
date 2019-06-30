import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from './rootSagas'
import reducers from './rootReducers'

const sagaMiddleware = createSagaMiddleware()

export const configureClientStore = () => {
  const defaultState = window.context.state
  return {
    ...createStore(reducers, defaultState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}

export const configureStore = () => {
  return {
    ...createStore(reducers, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}
