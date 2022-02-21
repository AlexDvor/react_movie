const getUsername = state => state.user.name;
const getIsLoggedIn = state => state.user.isLoggedIn;
const getFetchingCurrent = state => state.user.isFetchingCurrent;
const getToken = state => state.user.token;
const getSentLetter = state => state.user.isSentLetter;

export { getIsLoggedIn, getUsername, getFetchingCurrent, getToken, getSentLetter };
