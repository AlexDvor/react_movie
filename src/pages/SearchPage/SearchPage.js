import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../../services/movies-api';
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
import useDebounce from '../../hooks/useDebounce';

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query === '') return;
    fetchMovieByName(query).then(res => setMovies(res.results));
  }, [query]);

  const debouncedSave = useDebounce(nextValue => setQuery(nextValue), 600);
  const handleChange = event => {
    const { value: nextValue } = event.target;
    setFilter(nextValue);
    debouncedSave(nextValue);
  };

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
