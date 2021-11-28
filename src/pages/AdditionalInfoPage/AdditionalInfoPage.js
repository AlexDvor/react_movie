import { fetchMovieByCast } from '../../services/movies-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {
  ActorName,
  ActorListWrapper,
  Item,
  Image,
  ImageWrapper,
  ImageDefault,
} from './AdditionalInfoPage.styled';
import Container from '../../components/Container';
import defaultImage from '../../images/default1.jpg';

export default function AdditionalInfoPage() {
  const [movieData, setMovieData] = useState([]);
  const { movieId } = useParams('');
  console.log('movieData***', movieData);

  const URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchMovieByCast(movieId).then(res => setMovieData(res.cast));
  }, [movieId]);

  return (
    <Container>
      <ActorListWrapper>
        {movieData &&
          movieData.map(item => (
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
    </Container>
  );
}

// return (
//   <Container>
//     <ActorListWrapper>
//       {movieData &&
//         movieData.map(item => (
//           <Item key={item.id}>
//             {item.profile_path ? (
//               <img src={`${URL}/${item.profile_path}`} alt={item.name} width="200px" />
//             ) : (
//               <img src={defaultImage} alt="Not Found" width="200px" height="200px" />
//             )}
//             <ActorName> {item.name}</ActorName>
//             <p>Character{item.character}</p>
//           </Item>
//         ))}
//     </ActorListWrapper>
//   </Container>
// );
