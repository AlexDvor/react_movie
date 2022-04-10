import { StyledButton, AddIcon, AddedIcon } from './AddButton.styled';
import { useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { getAddingMovie } from '../../redux/movies/movies-selectors';
import { useSelector } from 'react-redux';
import * as moviesOperations from '../../redux/movies/movies-operations';
// Interface TS
import IMovie from '../../interfaces/Movie.interface';

interface Props {
  addToList: IMovie;
  disabled: boolean;
}

export default function AddButton({ addToList, disabled }: Props) {
  const isAddingMovie = useSelector(getAddingMovie);
  const dispatch = useDispatch();
  const handleClick = () => dispatch(moviesOperations.addMovies(addToList));

  return (
    <>
      <StyledButton type="button" onClick={handleClick} disabled={disabled}>
        {!isAddingMovie ? (
          <>
            {disabled ? <AddedIcon /> : <AddIcon />}
            {disabled ? 'Added' : 'Add'}
          </>
        ) : (
          <ThreeDots ariaLabel="loading-indicator" color="white" height={50} width={50} />
        )}
      </StyledButton>
    </>
  );
}
