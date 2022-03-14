import { createSlice } from '@reduxjs/toolkit';
import * as moviesOperations from './movies-operations';

const initialState = {
  favorite: [],
  isLoading: false,
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
      state.favorite = payload.data;
      state.isLoading = false;
    },
    [moviesOperations.getMovies.pending](state, _) {
      state.isLoading = true;
    },
    [moviesOperations.getMovies.rejected](state, _) {
      state.isLoading = false;
    },

    [moviesOperations.addMovies.fulfilled](state, { payload }) {
      state.favorite = [...state.favorite, payload.data];
      state.isLoading = false;
    },
    [moviesOperations.addMovies.pending](state, _) {
      state.isLoading = true;
    },
    [moviesOperations.addMovies.rejected](state, _) {
      state.isLoading = false;
    },

    [moviesOperations.removeMovieById.fulfilled](state, { payload }) {
      const result = state.favorite.filter(todo => todo.id !== payload.data.id);
      state.favorite = [...result];
      state.isLoading = false;
    },
    [moviesOperations.removeMovieById.pending](state, _) {
      state.isLoading = true;
    },
    [moviesOperations.removeMovieById.rejected](state, _) {
      state.isLoading = false;
    },
  },
});

export default movieSlice.reducer;
export const { removeMovieById, changeLanguages, getMovie, addMovies } = movieSlice.actions;
