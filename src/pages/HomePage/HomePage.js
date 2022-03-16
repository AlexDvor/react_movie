import { useState, useEffect } from 'react';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import { useSelector } from 'react-redux';
import { Wrapper } from './HomePage.styled';
import {
  fetchUpMovies,
  fetchTopMovies,
  fetchPopularMovies,
  fetchTrendMovies,
} from '../../services/movies-api';

//components
import Container from '../../components/Container';
import HomeMovieList from '../../components/HomeMovieList/HomeMovieList';
import TitleByType from '../../components/TitleByType/TitleByType';
import Hero from '../../components/Hero/Hero';

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
    <>
      <Hero />
      <Container>
        <Wrapper>
          <TitleByType text="Upcoming" />
          <HomeMovieList movies={upComingMovies} />

          <TitleByType text="Top Day" />
          <HomeMovieList movies={trendMovies} />

          <TitleByType text="Popular" />
          <HomeMovieList movies={popularMovies} />

          <TitleByType text="Top" />
          <HomeMovieList movies={topMovies} />
        </Wrapper>
      </Container>
    </>
  );
}
