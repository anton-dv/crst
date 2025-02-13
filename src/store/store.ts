import { configureStore } from '@reduxjs/toolkit';
import { navigationSlice } from './slices/navigation.slice';
import { themeSlice } from './slices/theme.slice';
import { localeSlice } from './slices/locale.slice';

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
    theme: themeSlice.reducer,
    locale: localeSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;