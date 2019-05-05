import { takeEvery, put } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['hello', 'world']);
    }, 100);
  });
}

function* initList() {
  const res = yield getData();
  console.log(res);
  const action = actionCreators.initListAction(res);
  yield put(action);
}

function* mySaga() {
  yield takeEvery(actionTypes.INIT_LIST_SAGA, initList);
}

export default mySaga;
