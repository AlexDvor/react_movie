import { useEffect, useState, useCallback, useMemo } from 'react';
import { fetchMovieByName } from '../../services/movies-api';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  console.log(movies);

  useEffect(() => {
    if (query === '') return;

    fetchMovieByName(query, page)
      .then(res => {
        return filterByPosterPath(res.results);
      })
      .then(res => {
        setMovies(prevState => [...prevState, ...res]);
      });
  }, [query, page]);

  const filterByPosterPath = array => {
    const newArr = [];
    for (let arr of array) {
      if (arr.poster_path) {
        newArr.push(arr);
      }
    }
    return newArr;
  };

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

  const URL = 'https://image.tmdb.org/t/p/w500';
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
        </InfiniteScroll>
      </ContentBox>
    </Container>
  );
}
