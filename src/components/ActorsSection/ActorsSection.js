import {
  Container,
  WrapperSlider,
  Image,
  CardWrapper,
  WrapperImage,
  WrapperActor,
} from './ActorsSection.styled';
import { fetchPersonById } from '../../services/movies-api';
import { useState, useEffect } from 'react';
import ActorsSlider from '../ActorsSlider/ActorsSlider';
//components
import AboutActor from '../AboutActor/AboutActor';

const URL = 'https://image.tmdb.org/t/p/w500';

export default function ActorsSection({ data }) {
  const [actor, setActor] = useState(null);
  const [personId, setPersonId] = useState(null);

  useEffect(() => {
    if (personId) fetchPersonById(Number(personId)).then(res => setActor(res));
  }, [personId]);

  const checkArrLength = () => {
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
          <ActorsSlider quantity={checkArrLength()}>
            {data.length > 0 &&
              data.map(({ id, profile_path, name }) => (
                <CardWrapper key={id} onClick={handleClick}>
                  <WrapperImage>
                    <Image src={`${URL}/${profile_path}`} alt={name} width="200px" id={id} />
                  </WrapperImage>
                </CardWrapper>
              ))}
          </ActorsSlider>
        </WrapperSlider>
      </Container>

      <WrapperActor>{actor && <AboutActor person={actor} />}</WrapperActor>
    </>
  );
}
