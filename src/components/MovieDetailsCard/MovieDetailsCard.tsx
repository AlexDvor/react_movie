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
  WrapperButton,
  ListButton,
  ItemButton,
} from './MovieDetailsCard.styled';

//redux
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
//components
import PlayButton from '../PlayButton/PlayButton';
import AddButton from '../AddButton/AddButton';
import Modal from '../Modal/Modal';
import Player from '../Player/Player';
//helpers
import checkForCopyById from '../../helpers/checkForCopyById';
import parseMovieGenres from '../../helpers/parseMovieGenres';

type TMovie = {
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

type TrailerObj = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

interface Props {
  movie: TMovie;
  trailer: TrailerObj[];
}

const URL = 'https://image.tmdb.org/t/p/w500/';

export default function MovieDetailsCard({ movie, trailer }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const favoriteMovies = useSelector(getFavoriteMovies);
  const onClick = () => setIsOpen(prevState => !prevState);

  return (
    <>
      <MovieWrapper>
        <InfoSection>
          <MovieHeader>
            <MovieImg src={`${URL}/${movie.poster_path}`} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieYear>{movie.release_date.slice(0, 4)}</MovieYear>
            <MovieMinutes>{movie.runtime} min</MovieMinutes>
            <MovieType>{parseMovieGenres(movie.genres)}</MovieType>
          </MovieHeader>
          <MovieDesc>
            <MovieText>{movie.overview}</MovieText>
          </MovieDesc>
          <WrapperButton>
            <ListButton>
              <ItemButton>
                <PlayButton
                  movieId={movie.id}
                  click={onClick}
                  isDisable={trailer.length ? false : true}
                />
              </ItemButton>

              <ItemButton>
                <AddButton
                  addToList={movie}
                  disabled={checkForCopyById(favoriteMovies, movie.id)}
                />
              </ItemButton>
            </ListButton>
          </WrapperButton>
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
        <BlurBack image={movie.backdrop_path}></BlurBack>
      </MovieWrapper>
      {isOpen && (
        <Modal onClose={onClick}>
          <Player movieId={movie.id}></Player>
        </Modal>
      )}
    </>
  );
}
