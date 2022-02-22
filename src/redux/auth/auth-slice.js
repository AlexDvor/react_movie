import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  name: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isSentLetter: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.fulfilled](state, { payload }) {
      state.name = payload.user.name;
      state.isSentLetter = true;
    },

    [authOperations.login.fulfilled](state, { payload }) {
      state.name = payload.data.user.name;
      state.token = payload.data.token;
      state.isLoggedIn = true;
    },

    [authOperations.logout.fulfilled](state, action) {
      state.name = null;
      state.token = null;
      state.isLoggedIn = false;
    },

    [authOperations.getCurrentUser.fulfilled](state, { payload }) {
      state.name = payload.data.user.name;
      state.isLoggedIn = true;
      state.isFetchingCurrent = false;
    },

    [authOperations.getCurrentUser.pending](state, _) {
      state.isFetchingCurrent = true;
    },

    [authOperations.getCurrentUser.rejected](state, _) {
      state.isFetchingCurrent = false;
    },
  },
});

export default authSlice.reducer;
