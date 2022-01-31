import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
import FavoriteMovieCard from '../../components/FavoriteMovieCard/FavoriteMovieCard';
import { Message } from './MyListPage.styled';
// import Player from '../components/Player/Player';

export default function MyListPage() {
  const favoriteMovie = useSelector(getFavoriteMovies);
  console.log(favoriteMovie);
  return (
    <Container>
      {favoriteMovie.length > 0 ? (
        <FavoriteMovieCard movie={favoriteMovie} />
      ) : (
        <Message>Your Is Empty</Message>
      )}
    </Container>
  );
}
