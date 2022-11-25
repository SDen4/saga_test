import { createSelector } from '@reduxjs/toolkit';

import { AppStateType } from 'store/rootReducer';

export const weatherChartSelect = createSelector(
  (store: AppStateType) => store.main.weatherChart,
  (weatherChart) => weatherChart,
);

export const weatherLoadingSelect = createSelector(
  (store: AppStateType) => store.main.weatherLoading,
  (weatherLoading) => weatherLoading,
);

export const currencyLoadingSelect = createSelector(
  (store: AppStateType) => store.main.currencyLoading,
  (currencyLoading) => currencyLoading,
);

export const currencyDataSelect = createSelector(
  (store: AppStateType) => store.main.currencyData,
  (currencyData) => currencyData,
);

export const currencyErrorSelect = createSelector(
  (store: AppStateType) => store.main.currencyError,
  (currencyError) => currencyError,
);

export const rndDataSelect = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);
