import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import API from './api'

const { SET_CURRENT, SET_LIST } = actionTypes

function * globalInfo() {
  const uInfo = yield call(API.getInfo)
  if (uInfo.code === 0) {
    yield put({ type: SET_CURRENT, user: uInfo.data.user })
  }
}

function * getList({ params }) {
  const res = yield call(API.getList, params)
  if (res) {
    yield put({ type: SET_LIST, list: res.data.poilist })
  }
}

function * getListParamsData({ params }) {
  const { filterData } = params
  const _params = {
    code: filterData.code,
    quantity: filterData.quantity
  }
  const res = yield call(API.getListData, _params)
  if (res) {
    yield put({ type: SET_LIST, list: res.data.poilist })
  }
}

function * saga() {
  yield takeEvery('GOLOBAL_SAGA', globalInfo)
  // 获取首页第一屏数据
  yield takeEvery('GLOBAL_LIST_SAGA', getList)
  // 通过参数获取的列表数据
  yield takeEvery('GLOBAL_CATEGORY_LISTPARAMSDATA_SAGA', getListParamsData)
}

export default saga
