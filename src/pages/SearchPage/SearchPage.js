import Container from '../../components/Container/Container';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../../services/movies-api';

export default function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter === '') return;
    fetchMovieByName(filter).then(setMovies);
  }, [filter]);

  return (
    <Container>
      <SearchBar filter={filter} searchField={setFilter} />
    </Container>
  );
}
