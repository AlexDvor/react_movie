import { StyledButton } from './PlayButton.styled';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function PlayButton({ movieId, click }) {
  return (
    <>
      <StyledButton type="button" onClick={click}>
        <AiFillPlayCircle color="white" fontSize="15px" />
        Play
      </StyledButton>
    </>
  );
}
