import { createAction } from '@reduxjs/toolkit';

const main = 'MReducer';

export const weatherSaga = createAction(`${main}/WEATHER_SAGA`);
export const currencySaga = createAction<string>(`${main}/CURRENCY_SAGA`);
