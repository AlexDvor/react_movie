import { useState, useEffect } from 'react';
import { fetchMovie } from '../services/movies-api';
import Container from '../components/Container';
import MovieList from '../components/MovieList/MovieList';
import TitleByType from '../components/TitleByType/TitleByType';

// console.log(fetchMovie().then(res => console.log(res.results)));

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(res => setMovies(res.results));
  }, []);

  return (
    <Container>
      <TitleByType text="Upcoming" />
      <MovieList movies={movies} />
    </Container>
  );
}
