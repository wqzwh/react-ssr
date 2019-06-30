import { call, put, takeEvery } from 'redux-saga/effects'
import actionTypes from '../actionTypes'
import API from './api'

const { SET_CURRENT } = actionTypes

function* globalInfo() {
  const uInfo = yield call(API.getInfo)
  if (uInfo.code === 0) {
    yield put({ type: SET_CURRENT, user: uInfo.data.user })
  }
}

function* saga() {
  yield takeEvery('GOLOBAL_SAGA', globalInfo)
}

export default saga
