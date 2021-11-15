import axios from 'axios';

const API_KEY = 'f992f54d2833387603d88ceb953812b4';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export async function fetchUpMovies() {
  return await axios(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByID(id) {
  return await axios(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTopMovies() {
  return await axios(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchPopularMovies() {
  return await axios(`${BASE_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTrendMovies() {
  return await axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTrailer(movieId) {
  return await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

// uk - UA;
