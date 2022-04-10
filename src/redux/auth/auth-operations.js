import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'http://localhost:4040/api';
axios.defaults.baseURL = 'https://watchentrailer.herokuapp.com/api';

type TDataForm = {
  email: string;
  name: string;
  password: string;
};

type TDataLogin = {
  email: string;
  password: string;
};

type TSignUp = (userData: TDataForm) => TDataForm;
type TLogin = (userData: TDataLogin) => TDataLogin;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signup: TSignUp = createAsyncThunk('auth/signup', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/signup', userData);
    return data;
  } catch (error) {
    toast.error('This email is already registered ');
    return rejectWithValue(console.log(error));
  }
});

const login: TLogin = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.post('/auth/login', userData);
    token.set(data.data.token);
    return data;
  } catch (error) {
    toast.error('Incorrect username or password');
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
  const persistToken = state.user.token;

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
