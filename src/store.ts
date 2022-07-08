import { configureStore } from '@reduxjs/toolkit';

import keyReducer from './slices/homeSlice';

export const store = configureStore({
  reducer: {
    key: keyReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
