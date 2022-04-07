import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TMovie = (userData: Object) => Object;
type TId = (userData: number) => number;

const getMovies = createAsyncThunk('get/movie', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/users/favorite/get');
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const addMovies: TMovie = createAsyncThunk('add/movie', async (userData, { rejectWithValue }) => {
  try {
    console.log('ssssss', userData);
    const { data } = await axios.post('/users/favorite/add', userData);
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const removeMovieById: TId = createAsyncThunk(
  'remove/movie',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/favorite/remove/${userData}`);
      return data;
    } catch (error) {
      return rejectWithValue(console.log(error));
    }
  },
);

export { getMovies, addMovies, removeMovieById };
