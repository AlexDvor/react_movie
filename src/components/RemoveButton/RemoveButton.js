import { StyledButton, DeleteIcon } from './RemoveButton.styled';
import { removeMovieById } from '../../redux/movies/movies-operations';
import { getRemovingMovie } from '../../redux/movies/movies-selectors';
import { useDispatch, useSelector } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';

export default function RemoveButton({ id }) {
  const isRemovingMovie = useSelector(getRemovingMovie);
  const dispatch = useDispatch();
  return (
    <>
      <StyledButton type="button" onClick={() => dispatch(removeMovieById(id))}>
        {!isRemovingMovie ? (
          <>
            <DeleteIcon /> Delete
          </>
        ) : (
          <ThreeDots ariaLabel="loading-indicator" color="white" height={50} width={50} />
        )}
        {/* <DeleteIcon /> Delete */}
      </StyledButton>
    </>
  );
}
