import { Link } from 'react-router-dom';

import {
  MovieCardList,
  MovieCardItem,
  MovieCard,
  InfoSection,
  MovieHeader,
  Image,
  TitleMovie,
  ReleaseDate,
  Minutes,
  Type,
  MovieDesc,
  BlurBack,
} from './FavoriteMovieCard.styled';
//components
import RemoveButton from '../RemoveButton/RemoveButton';
import PlayButton from '../PlayButton/PlayButton';
import ButtonsOptionsBar from '../ButtonsOptionsBar/ButtonsOptionsBar';

const parseMovieData = obj => obj.map(item => item.name).join(', ');
const URL = 'https://image.tmdb.org/t/p/w500/';

export default function FavoriteMovieCard({ movie }) {
  return (
    <>
      <MovieCardList>
        {movie.map(item => (
          <MovieCardItem key={item.id}>
            <Link to={{ pathname: `/movies/${item.id}` }}>
              <MovieCard>
                <InfoSection>
                  <MovieHeader>
                    <Image src={`${URL}/${item.poster_path}`} alt={item.title} />
                    <TitleMovie>{item.title}</TitleMovie>
                    <ReleaseDate>{item.release_date.slice(0, 4)}</ReleaseDate>
                    <Minutes>{item.runtime}</Minutes>
                    <Type>{parseMovieData(item.genres)}</Type>
                  </MovieHeader>

                  <MovieDesc>{/* <Text>{item.overview}</Text> */}</MovieDesc>
                </InfoSection>

                <BlurBack
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                  }}
                ></BlurBack>
                {/* <div class="blur_back tomb_back"></div> */}
              </MovieCard>
            </Link>

            <ButtonsOptionsBar bottom="10px" left="12px">
              <RemoveButton id={item.id} />
              <PlayButton />
            </ButtonsOptionsBar>
          </MovieCardItem>
        ))}
      </MovieCardList>
    </>
  );
}
