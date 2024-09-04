import { createSlice } from '@reduxjs/toolkit';
import { addWaterRecord } from './operations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    dailyRecords: [],
    monthlyRecords: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(addWaterRecord.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWaterRecord.fulfilled, (state, action) => {
        state.dailyRecords.push(action.payload);
        state.isLoading = false;
      })
      .addCase(addWaterRecord.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const waterReducer = waterSlice.reducer;
