import { useState, useEffect } from 'react';
import {
  fetchUpMovies,
  fetchTopMovies,
  fetchPopularMovies,
  fetchTrendMovies,
} from '../../services/movies-api';
import Container from '../../components/Container';
import HomeMovieList from '../../components/HomeMovieList/HomeMovieList';
import TitleByType from '../../components/TitleByType/TitleByType';

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
      <HomeMovieList movies={upComingMovies} />

      <TitleByType text="Top Day" />
      <HomeMovieList movies={trendMovies} />

      <TitleByType text="Populas Movies" />
      <HomeMovieList movies={popularMovies} />

      <TitleByType text="Top Movies" />
      <HomeMovieList movies={topMovies} />
    </Container>
  );
}
