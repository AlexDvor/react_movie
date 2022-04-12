import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import IMovie from '../../interfaces/Movie.interface';

interface IActionGetMovies {
    code: number;
    data: IMovie[];
    status: string;
}

interface IActionAddMovies {
 code: number;
  data: IMovie;
  status: string;
}

interface IActionRemove {
  code: number;
  data: {id:number};
  status: string;
}

interface TestAction<T>{
  code: number;
  data: T;
  status: string;

}

const getMovies = createAsyncThunk<IActionGetMovies>('get/movie', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get('/users/favorite/get');
    return data 
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const addMovies = createAsyncThunk<IActionAddMovies, any,{}>('add/movie', async (userData, { rejectWithValue}) => {
  try {
    const { data } = await axios.post('/users/favorite/add', userData);
    return data;
  } catch (error) {
    return rejectWithValue(console.log(error));
  }
});

const removeMovieById = createAsyncThunk<IActionRemove, any, {} >(
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
