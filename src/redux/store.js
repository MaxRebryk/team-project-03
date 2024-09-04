import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth.slice.js';
import waterReducer from './water/slice.js';
export default configureStore({
  reducer: {
    auth: authReducer,
    water: waterReducer,
  },
});
