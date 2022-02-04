import defaultImage from '../../images/default1.jpg';
import {
  ActorName,
  ActorListWrapper,
  Item,
  Image,
  ImageWrapper,
  ImageDefault,
} from './ActorsList.styled';

const URL = 'https://image.tmdb.org/t/p/w500';

export default function ActorsList({ data }) {
  return (
    <>
      <ActorListWrapper>
        {data &&
          data.map(item => (
            <Item key={item.id}>
              {item.profile_path ? (
                <ImageWrapper>
                  <Image src={`${URL}/${item.profile_path}`} alt={item.name} width="200px" />
                </ImageWrapper>
              ) : (
                <ImageWrapper>
                  <ImageDefault src={defaultImage} alt="Not Found" width="200px" />
                </ImageWrapper>
              )}
              <ActorName> {item.name}</ActorName>
              <p>Character{item.character}</p>
            </Item>
          ))}
      </ActorListWrapper>
    </>
  );
}
