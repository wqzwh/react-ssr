import { all } from 'redux-saga/effects'
import globalSaga from './global/sagas'
import home from './home/sagas'

export default function* rootSaga() {
  yield all([globalSaga(), home()])
}
