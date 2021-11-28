import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styled';
import { useState } from 'react';

export default function SearchAppBar() {
  const [filter, setFilter] = useState('');

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
