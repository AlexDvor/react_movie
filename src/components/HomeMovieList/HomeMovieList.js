import { MovieList } from './HomeMovieList.styled';

export default function HomeMovieList({ movies }) {
  const URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <MovieList>
      {movies.length > 0 &&
        movies.map(({ id, poster_path, title }) => (
          <li key={id}>
            <img src={`${URL}/${poster_path}`} alt={title} width="200px" />
            <h1>{title}</h1>
          </li>
        ))}
    </MovieList>
  );
}
