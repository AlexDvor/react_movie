import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import IMovie from '../../interfaces/Movie.interface';

interface ActionInterface<T>{
  code: number;
  data: T;
  status: string;

}
const getMovies = createAsyncThunk<ActionInterface<IMovie[]>>('get/movie', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/users/favorite/get');
    return data 
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const addMovies = createAsyncThunk<ActionInterface<IMovie>, any,{}>('add/movie', async (userData, { rejectWithValue}) => {
  try {
    const { data } = await axios.post('/users/favorite/add', userData);
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const removeMovieById = createAsyncThunk<ActionInterface<{id:number}>, number, {} >(
  'remove/movie',
  async (userData:number, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/users/favorite/remove/${userData}`);
      console.log("remove data ", data)
      return data;
    } catch (error) {
      return rejectWithValue(console.log(error));
    }
  },
);

export { getMovies, addMovies, removeMovieById };


