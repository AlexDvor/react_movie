const getFavoriteMovies = state => state.movies.favorite;
const getCurrentLanguages = state => state.movies.language;
const getLoadingMovie = state => state.movies.isLoading;
const getAddingMovie = state => state.movie.isAddingMovie;

export { getFavoriteMovies, getCurrentLanguages, getLoadingMovie, getAddingMovie };
