import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './SearchBar.styled';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from '../../services/movies-api';

export default function SearchAppBar({ filter, searchField }) {
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
          onChange={e => searchField(e.target.value)}
        />
      </Search>
    </>
  );
}
