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
          <MovieDesc>
            <MovieText>
              Lara Croft, the fiercely indeMovieTextendent daughter of a missing adventurer, must
              push herself beyond her limits when she finds herself on the island where her father
              disappeared.
            </MovieText>
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
        <BlurBack></BlurBack>
      </MovieWrapper>
    </Container>
  );
}
