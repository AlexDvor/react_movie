import { StyledButton, DeleteIcon } from './RemoveButton.styled';
// import { removeMovieById } from '../../redux/movies/movies-slice';
import { removeMovieById } from '../../redux/movies/movies-operations';
import { useDispatch } from 'react-redux';

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();
  return (
    <>
      <StyledButton type="button" onClick={() => dispatch(removeMovieById(id))}>
        <DeleteIcon />
      </StyledButton>
    </>
  );
}
