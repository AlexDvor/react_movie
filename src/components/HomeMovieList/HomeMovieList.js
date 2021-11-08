import { Link } from 'react-router-dom';
import { MovieList, MovieItem, WrapperThumb, WrapperContent, Image } from './HomeMovieList.styled';
import Slider from 'react-slick';

export default function HomeMovieList({ movies }) {
  const URL = 'https://image.tmdb.org/t/p/w500/';
  console.log(movies);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 5,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {movies.length > 0 &&
        movies.map(({ id, poster_path, title }) => (
          <WrapperThumb>
            <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
          </WrapperThumb>
        ))}
    </Slider>
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
