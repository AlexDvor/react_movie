import axios from 'axios';

const API_KEY = '93e18502a4f670f89316c5fc1b091bd6';
const BASE_URL = 'https://api.themoviedb.org/3/movie';


interface M {
  upcoming:{results:[]},
  top_rated:{results:[]},
  popular:{results:[]},
  movie_day:{results:[]},
}


// export async function fetchUpMovies(lang:string, page = 1) {
//   return await axios(`${BASE_URL}/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`)
//     .then(res => res.data)
//     .catch(error => error.massage);
// }


// export async function fetchTopMovies(lang:string, page = 1) {
//   return await axios(`${BASE_URL}/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`)
//     .then(res => res.data)
//     .catch(error => error.massage);
// }

// export async function fetchPopularMovies(lang:string) {
//   return await axios(`${BASE_URL}/popular?api_key=${API_KEY}&language=${lang}&page=1`)
//     .then(res => res.data)
//     .catch(error => error.massage);
// }

export async function fetchTrendMovies(lang:string, page = 1) {
  return await axios(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=${lang}&page=${page}`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByID(id:number, lang:string) {
  return await axios(`${BASE_URL}/${id}?api_key=${API_KEY}&language=${lang}&page=1`)
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchTrailer(movieId:number, lang:string) {
  return await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=${lang};`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}
export async function fetchMovieByCast(movieId:number, lang:string) {
  return await axios(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=${lang};`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchMovieByName(movieName:string, page:number, lang:string) {
  return await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}&language=${lang}&page=${page}&include_adult=false;`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchPersonById(personId:number, lang:string) {
  return await axios(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${API_KEY}&language=${lang}&include_adult=false;`,
  )
    .then(res => res.data)
    .catch(error => error.massage);
}

export async function fetchAllCategory(lang:string, page:number = 1) {
  const endpoints = [
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${lang}&page=${page}`,
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=${lang}&page=${page}`,
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=${lang}&page=${page}`,
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=${lang}&page=${page}`,
  ];
  const response= await Promise.all(endpoints.map(endpoint => axios.get(endpoint))).then(
    ([{ data: upcoming }, { data: top_rated }, { data: popular }, { data: movie_day }]) :M => {
      return {
        upcoming,
        top_rated,
        popular,
        movie_day,
      };
    },
  );
  return response;
}

// uk - UA;
// en - US;
