import { Link } from 'react-router-dom';
import { ImageWrapper, Image, CardWrapper } from './MovieList.styled';
import Container from '../Container';
import MovieSlider from '../Slider/Slider';

export default function MovieList({ movies }) {
  const URL = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Container>
      <MovieSlider>
        {movies.length > 0 &&
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
