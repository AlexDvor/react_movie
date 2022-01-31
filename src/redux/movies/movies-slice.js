import { createSlice } from '@reduxjs/toolkit';
import * as moviesOperations from './movies-operations';

const initialState = {
  favorite: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovieToLibrary(state, { payload }) {
      state.favorite = [...state.favorite, payload];
    },
  },
  extraReducers: {
    [moviesOperations.getMovies.fulfilled](state, action) {
      console.log('state :', state);
      console.log('action :', action);
      state.favorite = action.payload.results;
    },
  },
});

export default movieSlice.reducer;
export const { addMovieToLibrary } = movieSlice.actions;
