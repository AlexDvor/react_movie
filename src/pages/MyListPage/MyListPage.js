import { useSelector } from 'react-redux';
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
import { Message, Wrapper } from './MyListPage.styled';
//components
import FavoriteMovieList from '../../components/FavoriteMovieList/FavoriteMovieList';
import Container from '../../components/Container';
// import Player from '../components/Player/Player';

export default function MyListPage() {
  const favoriteMovie = useSelector(getFavoriteMovies);

  return (
    <Container>
      <Wrapper>
        {favoriteMovie.length > 0 ? (
          <FavoriteMovieList movie={favoriteMovie} />
        ) : (
          <Message>Your List Is Empty</Message>
        )}
      </Wrapper>
    </Container>
  );
}
