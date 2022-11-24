import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { WeatherChartItem } from 'model/weather';

export interface IInitialState {
  weatherChart: WeatherChartItem[];
  weatherLoading: boolean;
  rndData: number | null;
}

const initialState = {
  weatherChart: [],
  weatherLoading: true,
  rndData: null,
} as IInitialState;

const mainReducer = createSlice({
  name: 'MReducer',
  initialState,
  reducers: {
    weatherChart(state, action: PayloadAction<WeatherChartItem[]>) {
      return { ...state, weatherChart: action.payload };
    },
    weatherLoading(state, action: PayloadAction<boolean>) {
      return { ...state, weatherLoading: action.payload };
    },
    rndData(state, action: PayloadAction<number>) {
      return { ...state, rndData: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const { weatherChart, weatherLoading, rndData, reset } =
  mainReducer.actions;
export default mainReducer.reducer;
