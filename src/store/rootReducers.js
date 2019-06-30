import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import globalReducer from './global/reducers'
import home from './home/reducers'

const reducers = combineReducers({
  globalData: globalReducer,
  routing: routerReducer,
  home
})
export default reducers
