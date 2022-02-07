import { Image, CardWrapper, ImageWrapper } from './ActorsSection.styled';
import { fetchPersonById } from '../../services/movies-api';
import { useState, useEffect } from 'react';
import ActorsSlider from '../ActorsSlider/ActorsSlider';
//components
import AboutActor from '../AboutActor/AboutActor';

const URL = 'https://image.tmdb.org/t/p/w500';

export default function ActorsSection({ data }) {
  const [actor, setActor] = useState(null);
  const [personId, setPersonId] = useState(null);

  console.log(actor);

  useEffect(() => {
    if (personId) fetchPersonById(Number(personId)).then(res => setActor(res));
  }, [personId]);

  const handleClick = e => {
    setPersonId(e.target.id);
  };

  return (
    <>
      <ActorsSlider>
        {data.length > 0 &&
          data.map(({ id, profile_path, name }) => (
            <CardWrapper key={id} onClick={handleClick}>
              <ImageWrapper>
                <Image src={`${URL}/${profile_path}`} alt={name} width="200px" id={id} />
              </ImageWrapper>
            </CardWrapper>
          ))}
      </ActorsSlider>
      {actor && <AboutActor person={actor} />}
    </>
  );
}
