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
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import { useSelector } from 'react-redux';

export default function HomePage() {
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [trendMovies, setTrendMovies] = useState([]);
  const currentLang = useSelector(getCurrentLanguages);

  useEffect(() => {
    fetchUpMovies(currentLang.id).then(res => setUpComingMovies(res.results));
    fetchTopMovies(currentLang.id).then(res => setTopMovies(res.results));
    fetchPopularMovies(currentLang.id).then(res => setPopularMovies(res.results));
    fetchTrendMovies(currentLang.id).then(res => setTrendMovies(res.results));
  }, [currentLang]);

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
