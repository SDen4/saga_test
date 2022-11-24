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

export const rndDataSelect = createSelector(
  (store: AppStateType) => store.main.rndData,
  (rndData) => rndData,
);
