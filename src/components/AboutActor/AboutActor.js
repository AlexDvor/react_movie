import { Wrapper, BiographyText, ActorName } from './AboutActor.styled';
const URL = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';

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
