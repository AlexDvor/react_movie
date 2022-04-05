import { StyledButton, PlayIcon } from './PlayButton.styled';

type TProps = {
  movieId: number;
  isDisable: boolean;
  click: () => void;
};

export default function PlayButton({ movieId, click, isDisable }: TProps) {
  const messageBtn = () => (!isDisable ? 'Play' : 'Not Available');

  return (
    <>
      <StyledButton type="button" onClick={click} disabled={isDisable}>
        <PlayIcon disabled={isDisable} />
        {messageBtn()}
      </StyledButton>
    </>
  );
}
