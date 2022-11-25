import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyHistoryItemType, CurrencyResponce } from 'model/currency';
import { WeatherChartItem } from 'model/weather';

export interface IInitialState {
  weatherChart: WeatherChartItem[];
  weatherLoading: boolean;
  currencyLoading: boolean;
  currencyData: CurrencyResponce;
  currencyError: any;
  currencyHistory: CurrencyHistoryItemType[];
  rndData: number | null;
}

const initialState = {
  weatherChart: [],
  weatherLoading: true,
  currencyLoading: false,
  currencyData: {
    base: '',
    date: '',
    motd: { msg: '', url: '' },
    rates: {},
    success: true,
  },
  currencyError: null,
  currencyHistory: [],
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
    currencyLoading(state, action: PayloadAction<boolean>) {
      return { ...state, currencyLoading: action.payload };
    },
    currencyData(state, action: PayloadAction<CurrencyResponce>) {
      return { ...state, currencyData: action.payload };
    },
    currencyError(state, action: PayloadAction<any>) {
      return { ...state, currencyError: action.payload };
    },
    currencyHistory(state, action: PayloadAction<CurrencyHistoryItemType[]>) {
      return { ...state, currencyHistory: action.payload };
    },
    rndData(state, action: PayloadAction<number>) {
      return { ...state, rndData: action.payload };
    },
    reset() {
      return initialState;
    },
  },
});

export const {
  weatherChart,
  weatherLoading,
  rndData,
  reset,
  currencyLoading,
  currencyData,
  currencyError,
  currencyHistory,
} = mainReducer.actions;
export default mainReducer.reducer;
