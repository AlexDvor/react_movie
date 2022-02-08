import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { StyledAutocomplete, StyledBox, StyledTextField } from './LenguajesBox.styled';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeLanguages } from '../../redux/movies/movies-slice';

export default function LenguajesBox() {
  //   const [currentLangs, setCurrentLangs] = useState('US');
  const dispatch = useDispatch();

  const onChangeLangs = (event, value) => {
    dispatch(changeLanguages(value.id));
  };
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      //   style={{ width: '100px' }}
      options={countries}
      autoHighlight
      //   onChange={(event, value) => setCurrentLangs(value.code)}
      onChange={onChangeLangs}
      getOptionLabel={option => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={params => (
        <TextField
          {...params}
          label="Choose a language"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
  {
    code: 'DE',
    label: 'German',
    id: 'de',
  },

  {
    code: 'US',
    label: 'United States',
    id: 'en',
  },

  {
    code: 'ES',
    label: 'Spanish',
    id: 'es',
  },

  {
    code: 'FR',
    label: 'France',
    id: 'fr',
  },

  { code: 'RU', label: 'Russian', id: 'ru' },

  { code: 'UA', label: 'Ukraine', id: 'uk' },
];
