import { MovieList, MovieItem, WrapperThumb, WrapperContent, Image } from './HomeMovieList.styled';

export default function HomeMovieList({ movies }) {
  const URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <MovieList>
      {movies.length > 0 &&
        movies.map(({ id, poster_path, title }) => (
          <MovieItem key={id}>
            <WrapperThumb>
              <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
            </WrapperThumb>
            <WrapperContent>
              <h2>{title}</h2>
            </WrapperContent>
          </MovieItem>
        ))}
    </MovieList>
  );
}
