import { createSlice } from '@reduxjs/toolkit';
import * as moviesOperations from './movies-operations';
import TMovie from '../../interfaces/Movie.interface'

interface TInitialState {
  favorite: TMovie[],
  isLoading: boolean,
  isAddingMovie:  boolean,
  isRemovingMovie:  boolean,
  language: { code: string, label: string, id: string },
};

const initialState:TInitialState = {
  favorite: [],
  isLoading: false,
  isAddingMovie: false,
  isRemovingMovie: false,
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
extraReducers: (builder) => {
  builder.addCase(moviesOperations.getMovies.fulfilled, (state, {payload}) => {
     state.favorite = payload.data;
      state.isLoading = false;
    })
  builder.addCase(moviesOperations.getMovies.pending, (state, _) => {
     state.isLoading = true;
  })
   builder.addCase(moviesOperations.getMovies.rejected, (state, _) => {
     state.isLoading = false;
   })
  
  
  builder.addCase(moviesOperations.addMovies.fulfilled, (state, {payload}) => {
   state.favorite = [...state.favorite,payload.data];
      state.isLoading = false;
      state.isAddingMovie = false;
   })
  builder.addCase(moviesOperations.addMovies.pending, (state, _) => {
   state.isLoading = true;
      state.isAddingMovie = true;
  })
    builder.addCase(moviesOperations.addMovies.rejected, (state, _) => {
state.isLoading = false;
      state.isAddingMovie = false;
    })
  
  
  builder.addCase(moviesOperations.removeMovieById.fulfilled, (state, {payload}) => {
   const result = state.favorite.filter(todo => todo.id !== payload.data.id);
      state.favorite = [...result];
      state.isLoading = false;
      state.isRemovingMovie = false;
  })
  builder.addCase(moviesOperations.removeMovieById.pending, (state, _) => {
 state.isLoading = true;
      state.isRemovingMovie = true;
  })
    builder.addCase(moviesOperations.removeMovieById.rejected, (state, _) => {
state.isLoading = false;
      state.isRemovingMovie = false;
    })
  
  
  },

  // extraReducers: {
  //   [moviesOperations.getMovies.fulfilled](state, { payload }) {
  //     state.favorite = payload.data;
  //     state.isLoading = false;
  //   },
  //   [moviesOperations.getMovies.pending](state, _) {
  //     state.isLoading = true;
  //   },
  //   [moviesOperations.getMovies.rejected](state, _) {
  //     state.isLoading = false;
  //   },

  //   [moviesOperations.addMovies.fulfilled](state, { payload }) {
  //     state.favorite = [...state.favorite, payload.data];
  //     state.isLoading = false;
  //     state.isAddingMovie = false;
  //   },
  //   [moviesOperations.addMovies.pending](state, _) {
  //     state.isLoading = true;
  //     state.isAddingMovie = true;
  //   },
  //   [moviesOperations.addMovies.rejected](state, _) {
  //     state.isLoading = false;
  //     state.isAddingMovie = false;
  //   },

  //   [moviesOperations.removeMovieById.fulfilled](state, { payload }) {
  //     const result = state.favorite.filter(todo => todo.id !== payload.data.id);
  //     state.favorite = [...result];
  //     state.isLoading = false;
  //     state.isRemovingMovie = false;
  //   },
  //   [moviesOperations.removeMovieById.pending](state, _) {
  //     state.isLoading = true;
  //     state.isRemovingMovie = true;
  //   },
  //   [moviesOperations.removeMovieById.rejected](state, _) {
  //     state.isLoading = false;
  //     state.isRemovingMovie = false;
  //   },
  // },
});

export default movieSlice.reducer;
export const { removeMovieById, changeLanguages, getMovie, addMovies } = movieSlice.actions;
