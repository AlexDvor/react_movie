type TActor = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

type TPoster = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection: { id: number; name: string; poster_path: string; backdrop_path: string };
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  genres: {
    id: number;
    name: string;
  }[];
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
};

const filterByProfilePath = (array: TActor[]): TActor[] => {
  const newArr = [];
  for (let arr of array) {
    if (arr.profile_path) {
      newArr.push(arr);
    }
  }
  return newArr;
};

const filterByPosterPath = (array: TPoster[]): TPoster[] => {
  const newArr = [];
  for (let arr of array) {
    if (arr.poster_path) {
      newArr.push(arr);
    }
  }
  return newArr;
};

export { filterByProfilePath, filterByPosterPath };
