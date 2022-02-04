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
  WrapperButton,
  ListButton,
  ItemButton,
  Text,
  // MovieSocial,
  // MovieSocialList,
  // MovieSocialItem,
  // MovieSocialIcon,
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
                {/* <WrapperButton>
                  <ListButton>
                    <ItemButton>
                      <RemoveButton id={item.id} />
                    </ItemButton>
                    <ItemButton>
                      <PlayButton />
                    </ItemButton>
                  </ListButton>
                </WrapperButton> */}

                <ButtonsOptionsBar>
                  <RemoveButton id={item.id} />
                  <PlayButton />
                </ButtonsOptionsBar>

                {/* <MovieSocial>
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
                </MovieSocial> */}
              </InfoSection>
              <BlurBack
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                }}
              ></BlurBack>
              {/* <div class="blur_back tomb_back"></div> */}
            </MovieCard>
          </MovieCardItem>
        ))}
      </MovieCardList>
    </>
  );
}
