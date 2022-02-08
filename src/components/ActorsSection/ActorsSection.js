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

  useEffect(() => {
    if (personId) fetchPersonById(Number(personId), currentLang).then(res => setActor(res));
  }, [currentLang, personId]);

  const checkArrLength = () => {
    if (data.length > 10) return 9;
    return 7;
  };

  const handleClick = e => {
    setPersonId(e.target.id);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
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
