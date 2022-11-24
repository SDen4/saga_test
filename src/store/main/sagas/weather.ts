import { SagaIterator } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import { weatherInitSaga } from '../actions';

import { weatherChart, weatherLoading } from '../reducers';

import { httpRequest } from 'api/main/httpRequest';

import { WeatherAllDataType, WeatherChartItem } from 'model/weather';

function* getWeatherData() {
  try {
    const initValue: WeatherAllDataType = yield httpRequest();

    const chartData: WeatherChartItem[] = yield initValue.hourly.time.map(
      (el, i) => {
        return {
          name: el,
          temp: initValue.hourly.temperature_2m[i],
        };
      },
    );

    yield put(weatherChart(chartData));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  } finally {
    yield put(weatherLoading(false));
  }
}

export function* weatherSaga(): SagaIterator {
  [yield takeEvery(weatherInitSaga, getWeatherData)];
}
