import { useState } from 'react';
import { useSelector } from 'react-redux';
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
} from './MovieDetailsCard.styled';

//redux
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
//components
import ButtonsOptionsBar from '../ButtonsOptionsBar/ButtonsOptionsBar';
import PlayButton from '../PlayButton/PlayButton';
import AddButton from '../AddButton/AddButton';
import Modal from '../Modal/Modal';
import Player from '../Player/Player';
//helpers
import checkForCopyById from '../../helpers/checkForCopyById';

const URL = 'https://image.tmdb.org/t/p/w500/';
const parseMovieData = obj => obj.map(item => item.name).join(', ');

export default function MovieDetailsCard({ movie, trailer }) {
  const [isOpen, setIsOpen] = useState(false);
  const favoriteMovies = useSelector(getFavoriteMovies);
  const onClick = e => setIsOpen(prevState => !prevState);

  return (
    <>
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
              movieId={movie.id}
              click={onClick}
              isDisable={trailer.length >= 1 ? false : true}
            />
            <AddButton addToList={movie} disabled={checkForCopyById(favoriteMovies, movie.id)} />
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
      {isOpen && (
        <Modal onClose={onClick}>
          <Player movieId={movie.id}></Player>
        </Modal>
      )}
    </>
  );
}
