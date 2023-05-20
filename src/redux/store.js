import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { mixmateApi } from './services/mixmateMain'

export const store = configureStore({
  reducer: {
    [mixmateApi.reducerPath] :mixmateApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mixmateApi.middleware),
});
