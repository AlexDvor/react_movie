import { fetchMovieByID, fetchTrailer, fetchMovieByCast } from '../../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// Components
import Container from '../../components/Container';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import ActorsList from '../../components/ActorsList/ActorsList';
//helpers

import { filterByProfilePath } from '../../helpers/filterByPath';

export default function AboutMoviePage() {
  const [movie, setMovie] = useState(null);
  const [actorsData, setActorsData] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const { movieId } = useParams('');

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
    fetchTrailer(Number(movieId)).then(res => setTrailer(res.results.slice(0, 1)));
    fetchMovieByCast(movieId)
      .then(res => {
        return filterByProfilePath(res.cast);
      })
      .then(res => setActorsData(res));
  }, [movieId]);

  return (
    <Container>
      {movie && <MovieDetailsCard movie={movie} trailer={trailer} />}
      {actorsData && <ActorsList data={actorsData} />}
    </Container>
  );
}
