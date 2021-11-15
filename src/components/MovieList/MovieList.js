import { Link } from 'react-router-dom';
import { ImageWrapper, Image, CardWrapper } from './MovieList.styled';
import Slider from 'react-slick';
import Container from '../Container';

export default function MovieList({ movies }) {
  const URL = 'https://image.tmdb.org/t/p/w500/';

  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: false, // Infinitely wrap around contents
    slidesToShow: 8,
    slidesToScroll: 3,
    arrows: true,
    draggable: false,
    swipe: true,
    initialSlide: 1,
    touchThreshold: 13,

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
          initialSlide: 0,
          infinite: false,
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
          infinite: true,
        },
      },
    ],
  };

  return (
    <Container>
      <Slider {...settings}>
        {movies.length > 0 &&
          movies.map(({ id, poster_path, title }) => (
            <CardWrapper key={id}>
              <Link to={{ pathname: `/movies/${id}` }}>
                <ImageWrapper>
                  <Image src={`${URL}/${poster_path}`} alt={title} width="200px" />
                </ImageWrapper>
              </Link>
            </CardWrapper>
          ))}
      </Slider>
    </Container>
  );
}
