import axios from 'axios';

const API_KEY = 'f992f54d2833387603d88ceb953812b4';
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export async function fetchMovie() {
  return await axios(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByID(id) {
  return await axios(`${BASE_URL}/${id}?api_key=${API_KEY}&language=en-US&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}
