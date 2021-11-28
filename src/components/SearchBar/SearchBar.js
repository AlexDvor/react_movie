import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styled';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../../services/movies-api';

export default function SearchAppBar() {
  const [filter, setFilter] = useState('');
  const [data, setData] = useState([]);
  console.log('DATA', data);

  useEffect(() => {
    if (filter === '') return;
    fetchMovieByName(filter).then(setData);
  }, [filter]);

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
          type="text"
          name="filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </Search>
    </>
  );
}
