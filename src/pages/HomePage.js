import { useState, useEffect } from 'react';
import { fetchMovie } from '../services/movies-api';
import Container from '../components/Container';
import HomeMovieList from '../components/HomeMovieList/HomeMovieList';

// console.log(fetchMovie().then(res => console.log(res.results)));

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovie().then(res => setMovies(res.results));
  }, []);

  return (
    <Container>
      <HomeMovieList movies={movies} />
    </Container>
  );
}
