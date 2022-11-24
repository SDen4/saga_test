import { all, fork } from 'redux-saga/effects';

import { weatherSaga } from 'store/main/sagas/weather';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(weatherSaga)]);
}
