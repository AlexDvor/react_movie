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
import { useSelector } from 'react-redux';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
//components
import AboutActor from '../AboutActor/AboutActor';
import ActorsSlider from '../ActorsSlider/ActorsSlider';

const URL = 'https://image.tmdb.org/t/p/w500';

export default function ActorsSection({ data }) {
  const [actor, setActor] = useState(null);
  const [personId, setPersonId] = useState(null);
  const currentLang = useSelector(getCurrentLanguages);

  console.log('data:', data);

  useEffect(() => {
    if (personId) fetchPersonById(Number(personId), currentLang.id).then(res => setActor(res));
  }, [currentLang, personId]);

  const checkQuantity = () => {
    if (data.length > 10) return 9;
    return 7;
  };

  console.log(data);

  const handleClick = e => {
    setPersonId(e.target.id);
  };

  return (
    <>
      <Container>
        <WrapperSlider>
          <ActorsSlider quantity={checkQuantity()}>
            {data.length > 4 &&
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
