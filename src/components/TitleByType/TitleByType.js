import { Wrapper, Title } from './TitleByType.styled';

export default function TitleByType({ text }) {
  return (
    <>
      <Wrapper>
        <Title>{text}</Title>
      </Wrapper>
    </>
  );
}
