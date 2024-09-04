import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './auth/auth.slice'; // Corrected import

export const store = configureStore({
  reducer: {
    auth: persistedContactsReducer,
    // Add other reducers here
  },
});
