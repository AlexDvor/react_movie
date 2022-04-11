import IMovie from '../../interfaces/Movie.interface';

type TLanguages = {
  code: string;
  label: string;
  id: string;
};

interface IState {
  movies: {
    favorite: IMovie[];
    isAddingMovie: boolean;
    isLoading: boolean;
    isRemovingMovie: boolean;
    language: TLanguages;
  };
}

const getFavoriteMovies = (state: IState): IMovie[] => state.movies.favorite;
const getCurrentLanguages = (state: IState): TLanguages => state.movies.language;
const getLoadingMovie = (state: IState): boolean => state.movies.isLoading;
const getAddingMovie = (state: IState): boolean => state.movies.isAddingMovie;
const getRemovingMovie = (state: IState): boolean => state.movies.isRemovingMovie;

export {
  getFavoriteMovies,
  getCurrentLanguages,
  getLoadingMovie,
  getAddingMovie,
  getRemovingMovie,
};
