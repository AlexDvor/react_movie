import { createSlice } from '@reduxjs/toolkit';
import * as moviesOperations from './movies-operations';

const initialState = {
  favorite: [],
  language: { code: 'GB', label: 'English', id: 'en' },
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    changeLanguages(state, { payload }) {
      state.language = payload;
    },
  },
  extraReducers: {
    [moviesOperations.getMovies.fulfilled](state, { payload }) {
      console.log('getMovies', payload);
      state.favorite = payload.data;
    },
    [moviesOperations.addMovies.fulfilled](state, { payload }) {
      state.favorite = [...state.favorite, payload.data];
    },
    [moviesOperations.removeMovieById.fulfilled](state, { payload }) {
      const result = state.favorite.filter(todo => todo.id !== payload.data.id);
      state.favorite = [...result];
    },
  },
});

export default movieSlice.reducer;
export const { removeMovieById, changeLanguages, getMovie, addMovies } = movieSlice.actions;
