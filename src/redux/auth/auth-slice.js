import { createSlice } from '@reduxjs/toolkit';
import * as authOperations from './auth-operations';

const initialState = {
  name: null,
  token: null,
  isLoggedIn: false,
  isFetchingCurrent: false,
  isSentLetter: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.signup.fulfilled](state, { payload }) {
      state.name = payload.user.name;
      state.isSentLetter = true;
      state.isLoading = false;
    },
    [authOperations.signup.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.signup.rejected](state, _) {
      state.isLoading = false;
    },

    [authOperations.login.fulfilled](state, { payload }) {
      state.name = payload.data.user.name;
      state.token = payload.data.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.login.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.login.rejected](state, _) {
      state.isLoading = false;
    },

    [authOperations.logout.fulfilled](state, _) {
      state.name = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logout.pending](state, _) {
      state.isLoading = true;
    },
    [authOperations.logout.rejected](state, _) {
      state.isLoading = false;
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
