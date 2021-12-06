import { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchMovieByName } from '../../services/movies-api';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';
import {
  MovieListWrapper,
  MovieCardItem,
  MovieCardWrapper,
  DefaultImage,
  ContentBox,
  Image,
  SearchWrapper,
} from './SearchPage.styled';
import defaultImage from '../../images/default_gallery.jpg';
import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === '') return;
    fetchMovieByName(query, page).then(res => setMovies(res.results));
  }, [query, page]);

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
      debouncedSearch(e.target.value);
    },
    [debouncedSearch],
  );

  const URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <Container>
      <ContentBox>
        <SearchWrapper>
          <SearchBar filter={filter} onChange={handleChange} />
        </SearchWrapper>
        <MovieListWrapper>
          {movies.length > 0 &&
            movies.map(({ id, poster_path, title }) => (
              <MovieCardItem key={id}>
                <MovieCardWrapper>
                  <Link to={{ pathname: `/movies/${id}` }}>
                    {poster_path ? (
                      <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
                    ) : (
                      <DefaultImage src={defaultImage} alt="Not Found" width="200px" />
                    )}
                  </Link>
                </MovieCardWrapper>
              </MovieCardItem>
            ))}
        </MovieListWrapper>
      </ContentBox>
    </Container>
  );
}
