import {
  Wrapper,
  BiographyText,
  ActorName,
  ExclamationIcon,
  TextMessage,
} from './AboutActor.styled';


type props = {
  name: string;
  biography: string; 
}

interface PersonProps {
  person: props;  
}

export default function AboutActor({ person }: PersonProps) {
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
