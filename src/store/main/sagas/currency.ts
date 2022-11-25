import { SagaIterator } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';

import { currencySaga } from '../actions';

import {
  currencyData,
  currencyError,
  currencyHistory,
  currencyLoading,
} from '../reducers';

import { currencyErrorSelect, currencyHistorySelect } from 'selectors/main';

import { requestCurrency } from 'api/main/httpRequests';

import { CurrencyHistoryItemType, CurrencyResponce } from 'model/currency';

function* getCurrencyData({ payload }: ReturnType<typeof currencySaga>) {
  const currencyErr: unknown = yield select(currencyErrorSelect);
  const currencyHistoryStore: CurrencyHistoryItemType[] = yield select(
    currencyHistorySelect,
  );

  if (currencyErr) {
    yield put(currencyError(null));
  }
  yield put(currencyLoading(true));

  try {
    const currency: CurrencyResponce = yield requestCurrency(payload);

    if (currency) {
      yield put(currencyData(currency));
    }

    const newCurrencyItem: CurrencyHistoryItemType = yield {
      id: new Date().getTime(),
      num:
        currencyHistoryStore?.[currencyHistoryStore.length - 1]?.num + 1 ||
        currencyHistoryStore.length + 1,
      date: currency.date,
      currencyType: Object.keys(currency.rates)[0],
      currencyData: Object.values(currency.rates)[0],
    };

    yield put(currencyHistory([...currencyHistoryStore, newCurrencyItem]));
  } catch (error) {
    yield put(currencyError(error));
  } finally {
    yield put(currencyLoading(false));
  }
}

export function* currencyWatcher(): SagaIterator {
  [yield takeEvery(currencySaga, getCurrencyData)];
}
