import {
  MovieCard,
  InfoSection,
  MovieHeader,
  Locandina,
  TitleMovie,
  ReleaseDate,
  Minutes,
  Type,
  MovieDesc,
  Text,
  MovieSocial,
  MovieSocialList,
  MovieSocialItem,
  MovieSocialIcon,
  BlurBack,
} from './FavoriteMovieCard.styled';

const parseMovieData = obj => obj.map(item => item.name).join(', ');
const URL = 'https://image.tmdb.org/t/p/w500/';

export default function FavoriteMovieCard({ movie }) {
  return (
    <>
      {movie.map(item => {})}
      <MovieCard>
        <InfoSection>
          <MovieHeader>
            <Locandina src={`${URL}/${movie.poster_path}`} alt={movie.title} />
            <TitleMovie>{movie.title}</TitleMovie>
            <ReleaseDate>{movie.release_date.slice(0, 4)}</ReleaseDate>
            <Minutes>{movie.runtime}</Minutes>
            <Type>{parseMovieData(movie.genres)}</Type>
          </MovieHeader>
          <MovieDesc>
            <Text>{movie.overview}</Text>
          </MovieDesc>
          <MovieSocial>
            <MovieSocialList>
              <MovieSocialItem>
                <MovieSocialIcon>share</MovieSocialIcon>
              </MovieSocialItem>
              <MovieSocialItem>
                <MovieSocialIcon></MovieSocialIcon>
              </MovieSocialItem>
              <MovieSocialItem>
                <MovieSocialIcon>chat_bubble</MovieSocialIcon>
              </MovieSocialItem>
            </MovieSocialList>
          </MovieSocial>
        </InfoSection>
        <BlurBack
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
          }}
        ></BlurBack>
        {/* <div class="blur_back tomb_back"></div> */}
      </MovieCard>
    </>
  );
}
