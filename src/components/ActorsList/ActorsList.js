// import defaultImage from '../../images/default1.jpg';
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

//  <ActorListWrapper>
//    {data &&
//      data.map(item => (
//        <Item key={item.id}>
//          {item.profile_path ? (
//            <ImageWrapper>
//              <Image src={`${URL}/${item.profile_path}`} alt={item.name} width="200px" />
//            </ImageWrapper>
//          ) : (
//            <ImageWrapper>
//              <ImageDefault src={defaultImage} alt="Not Found" width="200px" />
//            </ImageWrapper>
//          )}
//          <ActorName> {item.name}</ActorName>
//          <p>Character{item.character}</p>
//        </Item>
//      ))}
//  </ActorListWrapper>;
