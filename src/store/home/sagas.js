import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import API from './api'

const { CHANGE_TAB, SET_CATEGORY } = actionTypes

function * changeTabs({ params }) {
  yield put({ type: CHANGE_TAB, activeKey: params.activeKey })
}

function * getCategory({ params }) {
  const res = yield call(API.getCategory)
  if (res) {
    yield put({ type: SET_CATEGORY, items: res.data.primary_filter })
  }
}

function * saga() {
  // 改变底部tab
  yield takeEvery('HOME_CHANGE_TAB_SAGA', changeTabs)
  // 获取类目
  yield takeEvery('HOME_CATEGORY_SAGA', getCategory)
}

export default saga
