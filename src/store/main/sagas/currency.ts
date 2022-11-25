import { SagaIterator } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';

import { currencySaga } from '../actions';

import { currencyData, currencyError, currencyLoading } from '../reducers';

import { currencyErrorSelect } from 'selectors/main';

import { requestCurrency } from 'api/main/httpRequests';

import { CurrencyResponce } from 'model/currency';

function* getCurrencyData({ payload }: ReturnType<typeof currencySaga>) {
  const currencyErr: unknown = yield select(currencyErrorSelect);

  if (currencyErr) {
    yield put(currencyLoading(true));
  }
  yield put(currencyError(null));

  try {
    const currency: CurrencyResponce = yield requestCurrency(payload);

    if (currency) {
      yield put(currencyData(currency));
    }
  } catch (error) {
    yield put(currencyError(error));
  } finally {
    yield put(currencyLoading(false));
  }
}

export function* currencyWatcher(): SagaIterator {
  [yield takeEvery(currencySaga, getCurrencyData)];
}
