import { StyledButton, AddIcon, AddedIcon } from './AddButton.styled';
import { useDispatch } from 'react-redux';
import * as moviesOperations from '../../redux/movies/movies-operations';

export default function AddButton({ addToList, disabled }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(moviesOperations.addMovies(addToList));

  return (
    <>
      <StyledButton type="button" onClick={handleClick} disabled={disabled}>
        {disabled ? <AddedIcon /> : <AddIcon />}
        {disabled ? 'Added' : 'Add'}
      </StyledButton>
    </>
  );
}
