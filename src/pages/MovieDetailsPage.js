// import { fetchMovieByID } from '../services/movies-api';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
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
  // const [movie, setMovie] = useState(null);
  // const { movieId } = useParams('');

  // useEffect(() => {
  //   fetchMovieByID(Number(movieId)).then(setMovie);
  // }, [movieId]);

  return (
    <Container>
      <MovieWrapper id="tomb">
        <InfoSection>
          <MovieHeader>
            <MovieImg src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg" />
            <MovieTitle>Tomb Raider</MovieTitle>
            <MovieYear>2018, Roar Uthaug</MovieYear>
            <MovieMinutes>125 min</MovieMinutes>
            <MovieType>Action, Fantasy</MovieType>
          </MovieHeader>
          <MovieDesc class="movie_desc">
            <MovieText class="text">
              Lara Croft, the fiercely indeMovieTextendent daughter of a missing adventurer, must
              push herself beyond her limits when she finds herself on the island where her father
              disappeared.
            </MovieText>
          </MovieDesc>
          <MovieSocial class="movie_social">
            <MovieSocialList>
              <MovieSocialItem>
                <MovieI class="material-icons">share</MovieI>
              </MovieSocialItem>
              <MovieSocialItem>
                <MovieI class="material-icons"></MovieI>
              </MovieSocialItem>
              <MovieSocialItem>
                <MovieI class="material-icons">chat_bubble</MovieI>
              </MovieSocialItem>
            </MovieSocialList>
          </MovieSocial>
        </InfoSection>
        <BlurBack class="blur_back tomb_back"></BlurBack>
      </MovieWrapper>
    </Container>
  );
}
