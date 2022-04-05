type TObject = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  name: string;
  title: string;
  release_date: string;
  runtime: number;
  genres: Object[];
  [key: string]: any;
};

export default interface IMovies {
  movies: TObject[];
}
