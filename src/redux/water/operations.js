import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addWaterRecord = createAsyncThunk(
  'water/addWaterRecord',
  async (record, thunkAPI) => {
    try {
      const { data } = await axios.post('/water', record);
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
    const END_POINT = `/water/monthly/${year}-${mongth}-01`;
    const url = END_POINT;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  });

export const getWaterRecord = createAsyncThunk(
  'water/getWaterRecord',
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
  'water/updateWaterRecord',
  async ({ recordId, amount, time }, thunkAPI) => {
    try {
      const response = await axios.patch(`/api/water/${recordId}`, {
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
