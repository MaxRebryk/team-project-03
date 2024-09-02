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

export const getMonthlyRecord = createAsyncThunk(
  'water/getMonthlyInfo',
  async (userData, thunkAPI) => {
    // const BASE_URL = '';
    const date = new Date(userData);
    const year = date.getFullYear();
    const mongth = date.getMonth().toString().padStart(2, '0');
    const END_POINT = `/monthly/${year}-${mongth}`;
    const url = END_POINT;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
