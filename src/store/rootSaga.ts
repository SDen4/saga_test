import { all, fork } from 'redux-saga/effects';

import { currencyWatcher } from 'store/main/sagas/currency';
import { weatherWatcher } from 'store/main/sagas/weather';

export function* rootSaga(): Generator<unknown> {
  yield all([fork(currencyWatcher), fork(weatherWatcher)]);
}
