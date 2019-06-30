import actionTypes from '../actionTypes'
import { createReducer } from '../lib'

const { CHANGE_TAB, SET_CATEGORY, SET_LIST } = actionTypes
const initialState = {
  tabs: [
    {
      name: '首页',
      key: 'home'
    },
    {
      name: '订单',
      key: 'order'
    },
    {
      name: '我的',
      key: 'my'
    }
  ],
  activeKey: 'home',
  items: [],
  list: []
}

const reducer = createReducer(initialState, {
  [CHANGE_TAB]: (state, { activeKey }) => {
    return { ...state, activeKey }
  },
  [SET_CATEGORY]: (state, { items }) => {
    return { ...state, items }
  },
  [SET_LIST]: (state, { list }) => {
    return { ...state, list }
  }
})

export default reducer
