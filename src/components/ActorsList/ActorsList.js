import ActorsSlider from '../ActorsSlider/ActorsSlider';
// import { Link } from 'react-router-dom';
import { Image, CardWrapper, ImageWrapper } from './ActorsList.styled';

const URL = 'https://image.tmdb.org/t/p/w500';

export default function ActorsList({ data }) {
  return (
    <>
      <ActorsSlider>
        {data.length > 0 &&
          data.map(({ id, profile_path, name }) => (
            <CardWrapper key={id}>
              {/* <Link to={{ pathname: `/movies/${id}` }}> */}
              <ImageWrapper>
                <Image src={`${URL}/${profile_path}`} alt={name} width="200px" />
              </ImageWrapper>
              {/* </Link> */}
            </CardWrapper>
          ))}
      </ActorsSlider>
    </>
  );
}
