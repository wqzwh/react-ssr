import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import API from './api'

const { SET_CATEGORY, SET_LIST } = actionTypes

// 初始化页面所有数据方法
export function* getInitData() {
  yield getCategory()
  yield getList()
}

export function* getList() {
  const res = yield call(API.getList)
  if (res) {
    yield put({ type: SET_LIST, list: res.data.poilist })
  }
}

export function* getCategory() {
  const res = yield call(API.getCategory)
  if (res) {
    yield put({ type: SET_CATEGORY, items: res.data.primary_filter })
  }
}

function* saga() {
  // 初始化home页面所有数据
  yield takeEvery('HOME_INITDATA_SAGA', getInitData)
  // 获取类目
  yield takeEvery('HOME_CATEGORY_SAGA', getCategory)
  //
  yield takeEvery('HOME_LIST_SAGA', getList)
}

export default saga
