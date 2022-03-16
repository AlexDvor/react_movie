import { fetchMovieByID, fetchTrailer, fetchMovieByCast } from '../../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import { getFetchingCurrent } from '../../redux/auth/auth-selectors';

// Components
import Container from '../../components/Container';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import ActorsSection from '../../components/ActorsSection/ActorsSection';
//helpers
import { filterByProfilePath } from '../../helpers/filterByPath';

export default function AboutMoviePage() {
  const [movie, setMovie] = useState(null);
  const [actorsData, setActorsData] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const { movieId } = useParams('');
  const currentLang = useSelector(getCurrentLanguages);
  const isFetchingCurrent = useSelector(getFetchingCurrent);

  useEffect(() => {
    fetchMovieByID(Number(movieId), currentLang.id).then(setMovie);
    fetchTrailer(Number(movieId), currentLang.id).then(res => setTrailer(res.results.slice(0, 1)));
    fetchMovieByCast(Number(movieId), currentLang.id)
      .then(res => {
        return filterByProfilePath(res.cast);
      })
      .then(res => setActorsData(res));
  }, [currentLang, movieId]);

  return (
    !isFetchingCurrent && (
      <Container>
        {movie && <MovieDetailsCard movie={movie} trailer={trailer} />}
        {actorsData && <ActorsSection data={actorsData} />}
      </Container>
    )
  );
}
