import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWaterRecord = createAsyncThunk(
  '/water',
  async (record, thunkAPI) => {
    try {
      const { data } = await axios.post('/water', record);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getWaterRecord = createAsyncThunk(
  'water/:id',
  async (recordId, thunkAPI) => {
    try {
      const response = await axios.get(`/water/${recordId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Failed to fetch water record'
      );
    }
  }
);

export const updateWaterRecord = createAsyncThunk(
  'water/:id',
  async ({ recordId, amount, time }, thunkAPI) => {
    try {
      const response = await axios.patch(`/water/${recordId}`, {
        amount,
        time,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || 'Failed to update water record'
      );
    }
  }
);
