import { StyledButton } from './AddButton.styled';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addMovieToLibrary } from '../../redux/movies/movies-slice';

export default function AddButton({ addToList, disabled }) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(addMovieToLibrary(addToList));

  return (
    <>
      <StyledButton type="button" onClick={handleClick} disabled={disabled}>
        <IoIosAddCircle color="white" size="1.2em" />
        {disabled ? 'Added' : 'Add'}
      </StyledButton>
    </>
  );
}
