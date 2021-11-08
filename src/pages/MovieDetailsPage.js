import { fetchMovieByID } from '../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../components/Container';
import {
  MovieWrapper,
  InfoSection,
  MovieHeader,
  MovieTitle,
  MovieYear,
  MovieMinutes,
  MovieType,
  MovieImg,
  MovieDesc,
  MovieText,
  MovieSocial,
  MovieSocialList,
  MovieSocialItem,
  MovieI,
  BlurBack,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams('');

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
  }, [movieId]);

  const URL = 'https://image.tmdb.org/t/p/w500/';
  const parseMovieData = obj => obj.map(item => item.name).join(', ');

  return (
    <Container>
      {movie && (
        <MovieWrapper>
          <InfoSection>
            <MovieHeader>
              <MovieImg src={`${URL}/${movie.poster_path}`} alt={movie.title} />
              <MovieTitle>{movie.title}</MovieTitle>
              <MovieYear>{movie.release_date.slice(0, 4)}</MovieYear>
              <MovieMinutes>{movie.runtime} min</MovieMinutes>
              <MovieType>{parseMovieData(movie.genres)}</MovieType>
            </MovieHeader>
            <MovieDesc>
              <MovieText>{movie.overview}</MovieText>
            </MovieDesc>
            <MovieSocial>
              <MovieSocialList>
                <MovieSocialItem>
                  <MovieI>share</MovieI>
                </MovieSocialItem>
                <MovieSocialItem>
                  <MovieI></MovieI>
                </MovieSocialItem>
                <MovieSocialItem>
                  <MovieI>chat_bubble</MovieI>
                </MovieSocialItem>
              </MovieSocialList>
            </MovieSocial>
          </InfoSection>
          <BlurBack
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            }}
          ></BlurBack>
        </MovieWrapper>
      )}
    </Container>
  );
}

// https://image.tmdb.org/t/p/original/dqcZi5qWufkKUZXAxG3EqWjAM9c.jpg
