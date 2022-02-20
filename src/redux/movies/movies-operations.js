import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_KEY = 'f992f54d2833387603d88ceb953812b4';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
// import { toast } from 'react-toastify';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.baseURL = BASE_URL;

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

const getMovies = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
      userData,
    );
    console.log('getMovies: ', data);
    // token.set(data.token);
    return data;
  } catch (error) {
    // toast.error('This email is already registered ');
    return rejectWithValue(console.log(error));
  }
});

// const login = createAsyncThunk('auth/login', async (userData, { rejectWithValue }) => {
//   try {
//     const { data } = await axios.post('/users/login', userData);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     toast.error('Incorrect username or password');
//     return rejectWithValue(console.log(error));
//   }
// });

// const logOut = createAsyncThunk('auth/logOut ', async (_, { rejectWithValue }) => {
//   try {
//     await axios.post('/users/logout');
//     token.unset();
//   } catch (error) {
//     return rejectWithValue(console.log(error));
//   }
// });

// const fetchCurrentUser = createAsyncThunk('auth/refresh ', async (_, thunkApi) => {
//   const state = thunkApi.getState();
//   const persistToken = state.auth.token;

//   if (persistToken === null) {
//     return thunkApi.rejectWithValue();
//   }

//   token.set(persistToken);
//   try {
//     const response = await axios.get('/users/current').then(res => res.data);
//     return response;
//   } catch (error) {
//     return thunkApi.rejectWithValue(console.log(error));
//   }
// });

export { getMovies };
