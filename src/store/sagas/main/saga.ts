import { put, takeEvery } from 'redux-saga/effects';

import { getInitDataSaga, saveInitData } from '../../reducers/main';

import httpRequest from '../../../api/main/httpRequest';

import { initDataType } from '../../../model/main/types';

function* getInitData() {
  try {
    const initData: initDataType = yield httpRequest();
    yield put(saveInitData(initData));
  } catch (error) {
    console.log(error);
  }
}

export function* rootSearchSaga(): Generator<unknown> {
  yield takeEvery(getInitDataSaga, getInitData);
}
