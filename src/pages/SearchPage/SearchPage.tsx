import { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchMovieByName } from '../../services/movies-api';
import { useSelector } from 'react-redux';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import { Link } from 'react-router-dom';
import {
  MovieListWrapper,
  MovieCardItem,
  MovieCardWrapper,
  ContentBox,
  Image,
  SearchWrapper,
} from './SearchPage.styled';

import InfiniteScroll from 'react-infinite-scroll-component';
import debounce from 'lodash.debounce';
//components
import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
//helpers
import { filterByPosterPath } from '../../helpers/filterByPath';

const URL = 'https://image.tmdb.org/t/p/w500';

type TObject = {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection: { id: number; name: string; poster_path: string; backdrop_path: string };
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  genres: {
    id: number;
    name: string;
  }[];
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
};

export default function SearchPage() {
  const [movies, setMovies] = useState<TObject[]>([]);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const currentLang = useSelector(getCurrentLanguages);

  useEffect(() => {
    if (query === '') return;

    fetchMovieByName(query, page, currentLang.id)
      .then(res => {
        return filterByPosterPath(res.results);
      })
      .then(res => {
        setMovies(prevState => [...prevState, ...res]);
      });
  }, [query, page, currentLang.id]);

  const debouncedSearch = useMemo(
    () =>
      debounce(val => {
        setQuery(val);
      }, 750),
    [setQuery],
  );

  const handleChange = useCallback(
    e => {
      setFilter(e.target.value);
      setPage(1);
      setMovies([]);
      debouncedSearch(e.target.value);
    },
    [debouncedSearch],
  );

  const nextPage = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <ContentBox>
        <SearchWrapper>
          <SearchBar filter={filter} onChange={handleChange} />
        </SearchWrapper>

        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={nextPage}
          hasMore={true}
          loader={
            <div style={{ height: '80%', paddingLeft: '35%', overflow: 'hidden', opacity: '0' }}>
              <h2>Loading...</h2>
            </div>
          }
        >
          <MovieListWrapper>
            {movies.length > 0 &&
              movies.map(({ id, poster_path, title }) => (
                <MovieCardItem key={id}>
                  <MovieCardWrapper>
                    <Link to={{ pathname: `/movies/${id}` }}>
                      <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
                    </Link>
                  </MovieCardWrapper>
                </MovieCardItem>
              ))}
          </MovieListWrapper>
        </InfiniteScroll>
      </ContentBox>
    </Container>
  );
}
