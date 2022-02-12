import { StyledButton, AddIcon, AddedIcon } from './AddButton.styled';
import { useDispatch } from 'react-redux';
import { addMovieToLibrary } from '../../redux/movies/movies-slice';

export default function AddButton({ addToList, disabled }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(addMovieToLibrary(addToList));

  return (
    <>
      <StyledButton type="button" onClick={handleClick} disabled={disabled}>
        {disabled ? <AddedIcon /> : <AddIcon />}
      </StyledButton>
    </>
  );
}
