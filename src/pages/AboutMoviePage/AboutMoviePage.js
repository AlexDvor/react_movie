import {
  fetchMovieByID,
  fetchTrailer,
  fetchMovieByCast,
  fetchPersonById,
} from '../../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

// Components
import Container from '../../components/Container';
import MovieDetailsCard from '../../components/MovieDetailsCard/MovieDetailsCard';
import CastList from '../../components/CastList/CastList';
import AboutActor from '../../components/AboutActor/AboutActor';
//helpers

import { filterByProfilePath } from '../../helpers/filterByPath';

export default function AboutMoviePage() {
  const [movie, setMovie] = useState(null);
  const [actorsData, setActorsData] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [actor, setActor] = useState(null);
  const { movieId } = useParams('');
  // console.log(actorsData);
  // console.log('actor', actor);

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
    fetchTrailer(Number(movieId)).then(res => setTrailer(res.results.slice(0, 1)));
    fetchMovieByCast(movieId)
      .then(res => {
        return filterByProfilePath(res.cast);
      })
      .then(res => setActorsData(res));
    fetchPersonById(Number(6384)).then(res => setActor(res));
  }, [movieId]);

  return (
    <Container>
      {movie && <MovieDetailsCard movie={movie} trailer={trailer} />}
      {actorsData && <CastList data={actorsData} />}
      {actor && <AboutActor data={actor} />}
    </Container>
  );
}
