import { StyledButton } from './PlayButton.styled';
import { AiFillPlayCircle } from 'react-icons/ai';

export default function PlayButton({ movieId, click, isDisable }) {
  const messageBtn = () => {
    return !isDisable ? 'Play' : 'Not Available';
  };

  return (
    <>
      <StyledButton type="button" onClick={click} disabled={isDisable}>
        <AiFillPlayCircle color="white" size="1.2em" />
        {messageBtn()}
      </StyledButton>
    </>
  );
}
