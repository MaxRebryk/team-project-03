import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
export const logOut = createAsyncThunk('/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
