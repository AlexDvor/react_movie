import { fetchMovieByID } from '../services/movies-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams('');

  useEffect(() => {
    fetchMovieByID(Number(movieId)).then(setMovie);
  }, [movieId]);

  return (
    <>
      <h2>ggggg</h2>
    </>
  );
}
