import { fetchMovieByID } from '../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// Components
import Container from '../components/Container';
import PlayButton from '../components/PlayButton/PlayButton';
import Player from '../components/Player/Player';
import AddButton from '../components/AddButton/AddButton';
import Modal from '../components/Modal/Modal';
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
  // MovieSocial,
  // MovieSocialList,
  // MovieSocialItem,
  // MovieI,
  MovieButtonsItem,
  MovieButtonsContainer,
  MovieButtonsList,
  BlurBack,
  // PlayerWrapper,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams('');

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
  }, [movieId]);

  const URL = 'https://image.tmdb.org/t/p/w500/';
  const parseMovieData = obj => obj.map(item => item.name).join(', ');

  const onClick = e => {
    setIsOpen(prevState => !prevState);
  };

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
            <MovieButtonsContainer>
              <MovieButtonsList>
                <MovieButtonsItem>
                  <PlayButton movieId={movieId} click={onClick} />
                </MovieButtonsItem>

                <MovieButtonsItem>
                  <AddButton />
                </MovieButtonsItem>
              </MovieButtonsList>
            </MovieButtonsContainer>
            {/* <MovieSocial>
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
            </MovieSocial> */}
          </InfoSection>
          <BlurBack
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
            }}
          ></BlurBack>
        </MovieWrapper>
      )}

      {isOpen && (
        <Modal onClose={onClick}>
          <Player movieId={movieId}></Player>
        </Modal>
      )}
    </Container>
  );
}
