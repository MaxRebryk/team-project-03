import { createSlice } from '@reduxjs/toolkit';
import { addWaterRecord, getMonthlyRecord } from './operations';

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
        state.error = null;
      })
      .addCase(addWaterRecord.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getMonthlyRecord.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMonthlyRecord.fulfilled, (state, action) => {
        state.monthlyRecords = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMonthlyRecord.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const waterReducer = waterSlice.reducer;
