import { combineReducers } from '@reduxjs/toolkit';

import main from 'store/main/reducers/reducer';

export const rootReducer = combineReducers({ main });

export type AppStateType = ReturnType<typeof rootReducer>;
