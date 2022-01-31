import Container from '../../components/Container';
import { useSelector } from 'react-redux';
import { getFavoriteMovies } from '../../redux/movies/movies-selectors';
import FavoriteMovieCard from '../../components/FavoriteMovieCard/FavoriteMovieCard';
// import Player from '../components/Player/Player';

export default function MyListPage() {
  const hasFavoriteMovie = useSelector(getFavoriteMovies);
  console.log(hasFavoriteMovie);
  return (
    <Container>
      <FavoriteMovieCard />
    </Container>
  );
}
