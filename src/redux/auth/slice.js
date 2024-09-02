import { createSlice } from '@reduxjs/toolkit';
import { logOut } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
      gender: null,
      photo: null,
    },
    token: null,
    isLoggedIn: false,
    loading: false,
    error: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logOut.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logOut.rejected, state => {
        state.loading = false;
        state.error = true;
      }),
});
export default authSlice.reducer;
