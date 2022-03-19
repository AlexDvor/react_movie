import { StyledButton, AddIcon, AddedIcon } from './AddButton.styled';
import { useDispatch } from 'react-redux';
import * as moviesOperations from '../../redux/movies/movies-operations';
import { ThreeDots } from 'react-loader-spinner';
import { getAddingMovie } from '../../redux/movies/movies-selectors';
import { useSelector } from 'react-redux';

export default function AddButton({ addToList, disabled }) {
  const isAddingMovie = useSelector(getAddingMovie);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(moviesOperations.addMovies(addToList));

  return (
    <>
      <StyledButton type="button" onClick={handleClick} disabled={disabled}>
        {disabled ? <AddedIcon /> : <AddIcon />}
        {disabled ? 'Added' : 'Add'}
        <ThreeDots ariaLabel="loading-indicator" color="#00BFFF" height={50} width={50} />
      </StyledButton>
    </>
  );
}
