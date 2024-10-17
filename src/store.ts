import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './helpers';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  // Pass in the root reducer setup as the `reducer` argument
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware).concat(apiSlice.middleware),
});

// Infer the type of `store`
export type AppStore = typeof store;
// Same for the `RootState` type
export type RootState = ReturnType<typeof store.getState>;
// Infer the `AppDispatch` type from the store itself
export type AppDispatch = typeof store.dispatch;

export default store;
