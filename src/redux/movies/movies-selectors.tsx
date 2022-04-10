const getFavoriteMovies = state => state.movies.favorite;
const getCurrentLanguages = state => state.movies.language;
const getLoadingMovie = state => state.movies.isLoading;
const getAddingMovie = state => state.movies.isAddingMovie;
const getRemovingMovie = state => state.movies.isRemovingMovie;

export {
  getFavoriteMovies,
  getCurrentLanguages,
  getLoadingMovie,
  getAddingMovie,
  getRemovingMovie,
};
