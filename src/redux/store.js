import { configureStore } from '@reduxjs/toolkit';
import { waterReducer } from './water/slice';
export default configureStore({
  reducer: { water: waterReducer },
});
