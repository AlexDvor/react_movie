import { StyledButton, PlayIcon } from './PlayButton.styled';

export default function PlayButton({ movieId, click, isDisable }) {
  // const messageBtn = () => {
  //   return !isDisable ? null : 'Not Available';
  // };

  // const showIcon = () => {
  //   return !isDisable ? 'flex' : 'none';
  // };

  return (
    <>
      <StyledButton type="button" onClick={click} disabled={isDisable}>
        <PlayIcon disabled={isDisable} />
        {/* {messageBtn()} */}
      </StyledButton>
    </>
  );
}
