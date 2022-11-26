import { put, takeEvery } from 'redux-saga/effects';

import { currencySaga } from '../actions';
import { currencyWatcher, getCurrencyData } from './currency';

import {
  currencyData,
  currencyError,
  currencyHistory,
  currencyLoading,
} from '../reducers';

const mockResult = {
  motd: {
    msg: 'If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.',
    url: 'https://exchangerate.host/#/donate',
  },
  success: true,
  base: 'USD',
  date: '2022-11-25',
  rates: {
    EUR: 0.959304,
  },
};

const mockHistoryItem = {
  id: new Date().getTime(),
  num: 1,
  date: '2022-11-25',
  currencyType: 'EUR',
  currencyData: 0.959304,
};

describe('getCurrencyData', () => {
  it('should be success', () => {
    const gen = getCurrencyData({
      payload: 'EUR',
      type: 'MReducer/CURRENCY_SAGA',
    });

    // select currency error
    // @ts-ignore
    gen.next();

    // select currencyHistoryStore
    // @ts-ignore
    gen.next(null);

    // start loading
    // @ts-ignore
    expect(gen.next([]).value).toEqual(put(currencyLoading(true)));

    // request the currency
    gen.next();

    // save the currency to the store
    // @ts-ignore
    expect(gen.next(mockResult).value).toEqual(put(currencyData(mockResult)));

    // new history currency item
    gen.next();

    // save to the store new history currency item
    // @ts-ignore
    expect(gen.next(mockHistoryItem).value).toEqual(
      put(currencyHistory([mockHistoryItem])),
    );

    // finally stop loading
    expect(gen.next().value).toEqual(put(currencyLoading(false)));

    // done of the generator
    expect(gen.next().done).toBeTruthy();
  });

  it('if error state !== null', () => {
    const gen = getCurrencyData({
      payload: 'EUR',
      type: 'MReducer/CURRENCY_SAGA',
    });

    // select currency error
    // @ts-ignore
    gen.next();

    // select currencyHistoryStore
    // @ts-ignore
    gen.next('Network error');

    // reset the error state
    // @ts-ignore
    expect(gen.next([]).value).toEqual(put(currencyError(null)));
  });
});

describe('currencyWatcher', () => {
  it('should be or not should be', () => {
    const gen = currencyWatcher();

    expect(gen.next().value).toEqual(takeEvery(currencySaga, getCurrencyData));
  });
});
