const getFavoriteMovies = state => state.movies.favorite;
const getCurrentLanguages = state => state.movies.language;
const getLoadingMovie = state => state.movies.isLoading;
// const getIsLoggedIn = state => state.auth.isLoggedIn;
// const getFetchingCurrent = state => state.auth.isFetchingCurrent;

export { getFavoriteMovies, getCurrentLanguages, getLoadingMovie };
