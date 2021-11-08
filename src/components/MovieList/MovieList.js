import { Link } from 'react-router-dom';
import { WrapperThumb, Image, TestDiv } from './MovieList.styled';
import Slider from 'react-slick';
import Container from '../Container';

export default function MovieList({ movies }) {
  const URL = 'https://image.tmdb.org/t/p/w500/';
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    draggable: false,
    swipe: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },

      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {movies.length > 0 &&
          movies.map(({ id, poster_path, title }) => (
            <TestDiv key={id}>
              <Link to={{ pathname: `/movies/${id}` }}>
                <WrapperThumb>
                  <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
                </WrapperThumb>
              </Link>
            </TestDiv>
          ))}
      </Slider>
    </Container>
  );
}

// export default function HomeMovieList({ movies }) {
//   const URL = 'https://image.tmdb.org/t/p/w500/';
//   return (
//     <MovieList>
//       {movies.length > 0 &&
//         movies.map(({ id, poster_path, title }) => (
//           <MovieItem key={id}>
//             <Link
//               to={{
//                 pathname: `/movies/${id}`,
//               }}
//             >
//               <WrapperThumb>
//                 <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
//               </WrapperThumb>
//               <WrapperContent>
//                 <h2>{title}</h2>
//               </WrapperContent>
//             </Link>
//           </MovieItem>
//         ))}
//     </MovieList>
//   );
// }
