import { StyledButton } from './RemoveButton.styled';
import { removeMovieById } from '../../redux/movies/movies-slice';
import { useDispatch } from 'react-redux';

export default function RemoveButton({ id }) {
  const dispatch = useDispatch();
  return (
    <>
      <StyledButton type="button" onClick={() => dispatch(removeMovieById(id))}>
        Delete
      </StyledButton>
    </>
  );
}
