import { StyledButton } from './AddButton.styled';
import { IoIosAddCircle } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { addMovieToLibrary } from '../../redux/movies/movies-slice';

export default function AddButton({ addToList }) {
  const dispatch = useDispatch();

  const handleClick = () => dispatch(addMovieToLibrary(addToList));

  return (
    <>
      <StyledButton type="button" onClick={handleClick}>
        <IoIosAddCircle color="white" size="1.2em" />
        Add
      </StyledButton>
    </>
  );
}
