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

export default function FavoriteMovieCard() {
  return (
    <>
      <MovieCard>
        <InfoSection>
          <MovieHeader>
            <Locandina
              src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
              alt="test"
            />
            <TitleMovie>Tomb Raider</TitleMovie>
            <ReleaseDate>2018, Roar Uthaug</ReleaseDate>
            <Minutes>125 min</Minutes>
            <Type>Action, Fantasy</Type>
          </MovieHeader>
          <MovieDesc>
            <Text>
              Lara Croft, the fiercely independent daughter of a missing adventurer, must push
              herself beyond her limits when she finds herself on the island where her father
              disappeared.
            </Text>
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
            backgroundImage: `url(https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png)`,
          }}
        ></BlurBack>
        {/* <div class="blur_back tomb_back"></div> */}
      </MovieCard>
    </>
  );
}
