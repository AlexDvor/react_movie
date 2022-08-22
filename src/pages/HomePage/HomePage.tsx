import { useState, useEffect } from 'react';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import { useSelector } from 'react-redux';
import { fetchAllCategory } from '../../services/movies-api';
import { Wrapper } from './HomePage.styled';
//components
import Container from '../../components/Container/Container';
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
    fetchAllCategory(currentLang.id).then(({ upcoming, top_rated, popular, movie_day }) => {
      setUpComingMovies(upcoming.results);
      setTopMovies(top_rated.results);
      setPopularMovies(popular.results);
      setTrendMovies(movie_day.results);
    });
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
