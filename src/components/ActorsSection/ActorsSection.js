import { fetchPersonById } from '../../services/movies-api';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
import {
  Container,
  WrapperSlider,
  Image,
  CardWrapper,
  WrapperImage,
  WrapperActor,
  Message,
  ExclamationIcon,
} from './ActorsSection.styled';
//components
import AboutActor from '../AboutActor/AboutActor';
import ActorsSlider from '../ActorsSlider/ActorsSlider';

const URL = 'https://image.tmdb.org/t/p/w500';

export default function ActorsSection({ data }) {
  const [actor, setActor] = useState(null);
  const [personId, setPersonId] = useState(null);
  const currentLang = useSelector(getCurrentLanguages);

  useEffect(() => {
    if (personId) fetchPersonById(Number(personId), currentLang.id).then(res => setActor(res));
  }, [currentLang, personId]);

  const checkQuantity = () => {
    if (data.length > 10) return 9;
    return 7;
  };

  const handleClick = e => {
    setPersonId(e.target.id);
  };

  return (
    <>
      <Container>
        <WrapperSlider>
          {data.length > 4 ? (
            <ActorsSlider quantity={checkQuantity()}>
              {data.map(({ id, profile_path, name }) => (
                <CardWrapper key={id} onClick={handleClick}>
                  <WrapperImage>
                    <Image src={`${URL}/${profile_path}`} alt={name} width="200px" id={id} />
                  </WrapperImage>
                </CardWrapper>
              ))}
            </ActorsSlider>
          ) : (
            <Message>
              <ExclamationIcon fontSize="1.2em" />
              Sorry but we don't have any information about the actors in this movie...!
            </Message>
          )}
        </WrapperSlider>
      </Container>

      <WrapperActor>{actor && <AboutActor person={actor} />}</WrapperActor>
    </>
  );
}
