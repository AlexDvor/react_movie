const getFavoriteMovies = state => state.movies.favorite;
const getCurrentLanguages = state => state.movies.language;
const isLoadingMovie = state => state.movies.isLoading;
// const getIsLoggedIn = state => state.auth.isLoggedIn;
// const getFetchingCurrent = state => state.auth.isFetchingCurrent;

export { getFavoriteMovies, getCurrentLanguages, isLoadingMovie };
