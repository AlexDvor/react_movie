import { Wrapper, BiographyText, ActorName } from './AboutActor.styled';

export default function AboutActor({ person }) {
  const { name, biography } = person;

  const checkBiography = () => {
    if (biography === '') return `Sorry, we don't have biography about ${name}`;
    return biography;
  };
  return (
    <>
      <Wrapper>
        <div>
          <ActorName>{name}</ActorName>
          <BiographyText>{checkBiography()}</BiographyText>
        </div>
      </Wrapper>
    </>
  );
}
