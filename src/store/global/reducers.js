import actionTypes from '../actionTypes'
import { createReducer } from '../lib'

const { SET_CURRENT, SET_LIST } = actionTypes
const initialState = {
  currentUser: '',
  list: []
}

const reducer = createReducer(initialState, {
  [SET_CURRENT]: (state, { user }) => {
    return { ...state, currentUser: user }
  },
  [SET_LIST]: (state, { list }) => {
    return { ...state, list }
  }
})

export default reducer
