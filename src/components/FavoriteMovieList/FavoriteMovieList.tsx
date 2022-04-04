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
  WrapperButton,
  ListButton,
  ItemButton,
} from './FavoriteMovieList.styled';
//components
import RemoveButton from '../RemoveButton/RemoveButton';
// import PlayButton from '../PlayButton/PlayButton';
// helpers
import parseMovieGenres from '../../helpers/parseMovieGenres';

const URL = 'https://image.tmdb.org/t/p/w500/';


type TObject = {
  id: number;
  poster_path: string;
  backdrop_path:string;
  name: string;
  title: string;
  release_date: string;
  runtime: number;
  genres: Object[];

}

interface IMovie {
  movie: TObject[];
 
}



export default function FavoriteMovieList({ movie }:IMovie) {
  console.log('movie,', movie); 
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
                    <Type>{parseMovieGenres(item.genres)}</Type>
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

            <WrapperButton>
              <ListButton>
                <ItemButton>
                  <RemoveButton id={item.id} />
                </ItemButton>
              </ListButton>
            </WrapperButton>
          </MovieCardItem>
        ))}
      </MovieCardList>
    </>
  );
}
