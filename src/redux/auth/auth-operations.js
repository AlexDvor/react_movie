import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:4040/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signup = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/signup', userData);
    return data;
  } catch (error) {
    // toast.error('This email is already registered ');
    return rejectWithValue(console.log(error));
  }
});

const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', userData);
    token.set(data.data.token);
    return data;
  } catch (error) {
    // toast.error('Incorrect username or password');
    return rejectWithValue(console.log(error));
  }
});

const logout = createAsyncThunk('auth/logout ', async (_, { rejectWithValue }) => {
  try {
    await axios.get('/auth/logout');
    token.unset();
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh ', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistToken = state.auth.token;

  if (persistToken === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistToken);

  try {
    const response = await axios.get('/users/current').then(res => res.data);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(console.log(error));
  }
});

export { signup, login, logout, getCurrentUser };
