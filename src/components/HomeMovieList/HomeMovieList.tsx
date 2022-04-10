import { Link } from 'react-router-dom';
import { ImageWrapper, Image, CardWrapper } from './HomeMovieList.styled';
import Container from '../Container/Container';
import MovieSlider from '../MovieSlider/MovieSlider';
import IMovie from '../../interfaces/Movie.interface';

const URL: string = 'https://image.tmdb.org/t/p/w500/';

type Props = {
  movies: IMovie[];
};

export default function HomeMovieList({ movies }: Props) {
  return (
    <Container>
      <MovieSlider>
        {movies.length &&
          movies.map(({ id, poster_path, title }) => (
            <CardWrapper key={id}>
              <Link to={{ pathname: `/movies/${id}` }}>
                <ImageWrapper>
                  <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
                </ImageWrapper>
              </Link>
            </CardWrapper>
          ))}
      </MovieSlider>
    </Container>
  );
}
