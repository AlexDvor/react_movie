import {
  Wrapper,
  BiographyText,
  ActorName,
  ExclamationIcon,
  TextMessage,
} from './AboutActor.styled';

export default function AboutActor({ person }) {
  const { name, biography } = person;

  const checkBiography = () => {
    if (biography === '')
      return (
        <TextMessage>
          <ExclamationIcon fontSize="1.2em" />
          {`Sorry, we don't have biography about ${name}`}
        </TextMessage>
      );
    return biography;
  };

  //  const checkBiography = () => {
  //    if (biography === '') return `Sorry, we don't have biography about ${name}`;
  //    return biography;
  //  };
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
