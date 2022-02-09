import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import { StyledAutocomplete, StyledBox, StyledTextField } from './LenguajesBox.styled';
import { useDispatch } from 'react-redux';
import { changeLanguages } from '../../redux/movies/movies-slice';
import { languages } from '../../helpers/languages';
import { useSelector } from 'react-redux';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';

export default function LanguageSelectBox() {
  const currentLang = useSelector(getCurrentLanguages);
  const dispatch = useDispatch();

  const onChangeLangs = (event, value) => {
    if (!value) {
      return dispatch(changeLanguages('en'));
    }
    return dispatch(changeLanguages(value));
  };

  return (
    <>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 200 }}
        //   style={{ width: '100px' }}
        style={{ backgroundColor: '#838383' }}
        options={languages}
        autoHighlight
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
            {option.label}
          </Box>
        )}
        renderInput={params => (
          <TextField
            {...params}
            // label={currentLang}
            color="info"
            placeholder={currentLang.label}

            // inputProps={{
            //   ...params.inputProps,
            //   autoComplete: 'new-password', // disable autocomplete and autofill
            // }}
          />
        )}
      />
    </>
  );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
