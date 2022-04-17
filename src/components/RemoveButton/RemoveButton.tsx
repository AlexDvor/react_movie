import { StyledButton, DeleteIcon } from './RemoveButton.styled';
import { removeMovieById } from '../../redux/movies/movies-operations';
import { useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import { useState } from 'react';

type Props = {
  id: number;
};

export default function RemoveButton({ id }: Props) {
  const [isRemovingMovie, isRemovingMovieSet] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    try {
      isRemovingMovieSet(true);
      dispatch(removeMovieById(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StyledButton type="button" onClick={handleClick}>
        {!isRemovingMovie ? (
          <>
            <DeleteIcon /> Delete
          </>
        ) : (
          <ThreeDots ariaLabel="loading-indicator" color="white" height={50} width={50} />
        )}
      </StyledButton>
    </>
  );
}
