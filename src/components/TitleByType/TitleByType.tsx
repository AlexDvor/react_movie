import { Wrapper, Title } from './TitleByType.styled';

type TProps = {
  text: string;
};

export default function TitleByType({ text }: TProps) {
  return (
    <>
      <Wrapper>
        <Title>{text}</Title>
      </Wrapper>
    </>
  );
}
