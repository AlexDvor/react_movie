import axios from 'axios';

const API_KEY = '93e18502a4f670f89316c5fc1b091bd6';
// const API_KEY = 'f992f54d2833387603d88ceb953812b4';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export async function fetchUpMovies(lang, page = 1) {
  return await axios(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByID(id, lang) {
  return await axios(`${BASE_URL}/${id}?api_key=${API_KEY}&language=${lang}&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTopMovies(lang, page = 1) {
  return await axios(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchPopularMovies(lang) {
  return await axios(`${BASE_URL}/popular?api_key=${API_KEY}&language=${lang}&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTrendMovies(lang, page = 1) {
  return await axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=${lang}&page=${page}`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTrailer(movieId, lang) {
  return await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=${lang};`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByCast(movieId, lang) {
  return await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=${lang};`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByName(movieName, page, lang) {
  return await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}&language=${lang}&page=${page}&include_adult=false;`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchPersonById(personId, lang) {
  return await axios(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=${lang}&include_adult=false;`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

// https://api.themoviedb.org/3/person/{person_id}?api_key=<<api_key>>&language=en-US
// uk - UA;
// en - US;
