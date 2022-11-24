import { createAction } from '@reduxjs/toolkit';

const main = 'MReducer';

export const weatherInitSaga = createAction(`${main}/WEATHER_SAGA`);
