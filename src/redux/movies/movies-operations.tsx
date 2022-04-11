import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import IMovie from '../../interfaces/Movie.interface';

const getMovies = createAsyncThunk('get/movie', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/users/favorite/get');
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const addMovies = createAsyncThunk('add/movie', async (userData: IMovie, { rejectWithValue }) => {
  try {
    console.log('ssssss', userData);
    const { data } = await axios.post('/users/favorite/add', userData);
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const removeMovieById = createAsyncThunk(
  'remove/movie',
  async (userData: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/favorite/remove/${userData}`);
      return data;
    } catch (error) {
      return rejectWithValue(console.log(error));
    }
  },
);

export { getMovies, addMovies, removeMovieById };
