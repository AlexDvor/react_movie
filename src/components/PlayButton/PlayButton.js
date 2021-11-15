import { StyledButton } from './PlayButton.styled';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function PlayButton({ movieId }) {
  return (
    <>
      <StyledButton type="button">
        <AiFillPlayCircle color="white" fontSize="15px" />
        Play
      </StyledButton>
    </>
  );
}
