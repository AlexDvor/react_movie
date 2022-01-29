// Skip to content
// Search or jump to…
// Pulls
// Issues
// Marketplace
// Explore

// @AlexDvor
// AlexDvor
// /
// goit-react-hw-08-phonebook
// Public
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// More
// goit-react-hw-08-phonebook/src/redux/Auth/Auth-operations.js /
// @AlexDvor
// AlexDvor bug-fix form
// Latest commit 80a6ed3 on 27 Oct 2021
//  History
//  1 contributor
// 64 lines (56 sloc)  1.78 KB

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

// const register = createAsyncThunk('auth/register', async (userData, { rejectWithValue }) => {
//   try {
//     const { data } = await axios.post('/users/signup', userData);
//     console.log('register: ', data);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     toast.error('This email is already registered ');
//     return rejectWithValue(console.log(error));
//   }
// });

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

// export { register, login, logOut, fetchCurrentUser };
// © 2022 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
// Loading complete Octotree
//  Login with GitHub
