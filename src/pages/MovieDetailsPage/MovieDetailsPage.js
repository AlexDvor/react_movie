import { fetchMovieByID, fetchTrailer } from '../../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
// helpers
import checkForCopyById from '../../helpers/checkForCopyById';
//selectors
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
// Components
// import AdditionalButton from '../../components/AdditionalButton/AdditionalButton';
import Container from '../../components/Container';
import PlayButton from '../../components/PlayButton/PlayButton';
import Player from '../../components/Player/Player';
import AddButton from '../../components/AddButton/AddButton';
import Modal from '../../components/Modal/Modal';
import ButtonsOptionsBar from '../../components/ButtonsOptionsBar/ButtonsOptionsBar';
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
  BlurBack,
} from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState([]);
  const { movieId } = useParams('');
  const favoriteMovies = useSelector(getFavoriteMovies);
  const URL = 'https://image.tmdb.org/t/p/w500/';
  const parseMovieData = obj => obj.map(item => item.name).join(', ');

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
    fetchTrailer(Number(movieId)).then(res => setTrailer(res.results.slice(0, 1)));
  }, [movieId]);

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
            <ButtonsOptionsBar bottom="12px" left="30px">
              <PlayButton
                movieId={movieId}
                click={onClick}
                isDisable={trailer.length >= 1 ? false : true}
              />
              <AddButton addToList={movie} disabled={checkForCopyById(favoriteMovies, movieId)} />
              {/* <AdditionalButton movieId={movieId} /> */}
            </ButtonsOptionsBar>
            {/* <MovieButtonsContainer>
              <MovieButtonsList>
                <MovieButtonsItem>
                  <PlayButton
                    movieId={movieId}
                    click={onClick}
                    isDisable={trailer.length >= 1 ? false : true}
                  />
                </MovieButtonsItem>

                <MovieButtonsItem>
                  <AddButton
                    addToList={movie}
                    disabled={checkForCopyById(favoriteMovies, movieId)}
                  />
                </MovieButtonsItem>

                <MovieButtonsItem>
                  <AdditionalButton movieId={movieId} />
                </MovieButtonsItem>
              </MovieButtonsList>
            </MovieButtonsContainer> */}
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
