import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWaterRecord = createAsyncThunk(
  'water/addWaterRecord',
  async (record, thunkAPI) => {
    try {
      const { data } = await axios.post('/api/water', record);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
