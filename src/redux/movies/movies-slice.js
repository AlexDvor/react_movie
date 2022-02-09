import { createSlice } from '@reduxjs/toolkit';
import * as moviesOperations from './movies-operations';

const initialState = {
  favorite: [],
  language: { code: 'GB', label: 'Englisch', id: 'en' },
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovieToLibrary(state, { payload }) {
      const result = state.favorite.some(item => item.id === payload.id);
      if (!result) {
        state.favorite = [...state.favorite, payload];
      }
      return;
    },

    removeMovieById(state, { payload }) {
      const result = state.favorite.filter(todo => todo.id !== payload);
      state.favorite = [...result];
    },

    changeLanguages(state, { payload }) {
      state.language = payload;
    },
  },
  extraReducers: {
    [moviesOperations.getMovies.fulfilled](state, action) {
      state.favorite = action.payload.results;
    },
  },
});

export default movieSlice.reducer;
export const { addMovieToLibrary, removeMovieById, changeLanguages } = movieSlice.actions;
