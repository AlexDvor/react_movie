const getUsername = state => state.user.name;
const getIsLoggedIn = state => state.user.isLoggedIn;
const getFetchingCurrent = state => state.user.isFetchingCurrent;
const getToken = state => state.user.token;

export { getIsLoggedIn, getUsername, getFetchingCurrent, getToken };
