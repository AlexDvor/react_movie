import Animate from 'react-smooth';
import logo from '../../images/imdb-logo.png';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { fetchTrendMovies } from '../../services/movies-api';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import {
  Popular,
  Wrapper,
  BackgroundImage,
  PopularInfo,
  Title,
  Rating,
  ReleaseDate,
  HeaderOverview,
  Button,
  SwitchImg,
  Item,
  Img,
} from './Hero.styled';

type TMovie = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  name: string;
  title: string;
  release_date: string;
  runtime: number;
  genres: Object[];
  [key: string]: any;
};

export default function Hero() {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [i, setI] = useState<number>(0);
  const currentLang = useSelector(getCurrentLanguages);
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const showcaseMovies = 3;
  const timeoutTime = 5000;

  useEffect(() => {
    const randomPage = Math.floor(Math.random() * 10) + 1;
    fetchTrendMovies(currentLang.id, randomPage).then(res => setMovies(res.results));
  }, [currentLang.id]);

  useEffect(() => {
    intervalId.current = setTimeout(() => {
      if (i >= showcaseMovies) {
        setI(0);
      } else {
        setI(prevState => prevState + 1);
      }
    }, timeoutTime);

    return () => {
      clearTimeout(intervalId.current as NodeJS.Timeout);
    };
  }, [i]);

  const handelClick = (index: number) => {
    setI(index);
    clearTimeout(intervalId.current as NodeJS.Timeout);
  };

  const switchItems = movies.length
    ? movies.map((movie, index) => {
        if (index <= showcaseMovies) {
          return (
            <Item
              key={index}
              active={i === index ? 'active' : null}
              onClick={() => handelClick(index)}
            />
          );
        } else return null;
      })
    : null;

  return (
    <>
      <Popular>
        {movies.length && (
          <Wrapper key={movies[i].id}>
            <Animate to="1" from="0.2" attributeName="opacity">
              <BackgroundImage image={movies[i].backdrop_path}>
                <PopularInfo>
                  <Title>{movies[i].title}</Title>
                  <Rating>
                    <Img src={logo} alt="Rating" /> {movies[i].vote_average}
                  </Rating>
                  <ReleaseDate>
                    Release Date: {new Date(movies[i].release_date).toDateString()}
                  </ReleaseDate>
                  <HeaderOverview>{movies[i].overview}</HeaderOverview>
                  <Link to={`/movies/${movies[i].id}`}>
                    <Button>Thriler</Button>
                  </Link>
                </PopularInfo>
                <SwitchImg className="switchImg">{switchItems}</SwitchImg>
              </BackgroundImage>
            </Animate>
          </Wrapper>
        )}
      </Popular>
    </>
  );
}
