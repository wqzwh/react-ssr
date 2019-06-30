import actionTypes from '../actionTypes'
import { createReducer } from '../lib'

const { SET_CURRENT } = actionTypes
const initialState = {
  currentUser: ''
}

const reducer = createReducer(initialState, {
  [SET_CURRENT]: (state, { user }) => {
    return { ...state, currentUser: user }
  }
})

export default reducer
