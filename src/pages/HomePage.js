import { useState, useEffect } from 'react';
import {
  fetchUpMovies,
  fetchTopMovies,
  fetchPopularMovies,
  fetchTrendMovies,
} from '../services/movies-api';
import Container from '../components/Container';
import MovieList from '../components/MovieList/MovieList';
import TitleByType from '../components/TitleByType/TitleByType';

export default function HomePage() {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchUpMovies().then(res => setUpComingMovies(res.results));
    fetchTopMovies().then(res => setTopMovies(res.results));
    fetchPopularMovies().then(res => setPopularMovies(res.results));
    fetchTrendMovies().then(res => setTrendMovies(res.results));
  }, []);

  return (
    <Container>
      <TitleByType text="Upcoming" />
      <MovieList movies={upComingMovies} />

      <TitleByType text="Top Day" />
      <MovieList movies={trendMovies} />

      <TitleByType text="Populas Movies" />
      <MovieList movies={popularMovies} />

      <TitleByType text="Top Movies" />
      <MovieList movies={topMovies} />
    </Container>
  );
}
