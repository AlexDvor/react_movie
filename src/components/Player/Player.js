import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { PlayerWrapper, Wrapper } from './Player.styled';
import { fetchTrailer } from '../../services/movies-api';
import MovieSlider from '../Slider/Slider';

export default function Player({ movieId }) {
  const URL = 'https://www.youtube.com';
  const [movie, setMovie] = useState([]);

  const settings = {
    controls: true,
    playing: false,
    width: '100%',
    height: '100%',
  };

  useEffect(() => {
    fetchTrailer(Number(movieId)).then(res => setMovie(res.results));
  }, [movieId]);

  return (
    <MovieSlider>
      {movie &&
        movie.map(item => (
          <Wrapper>
            <ReactPlayer key={item.key} {...settings} url={`${URL}/watch?v=${item.key}`} />
          </Wrapper>
        ))}
    </MovieSlider>
  );
}
{
  /* 
// <MovieSlider>
//   {movie && movie.map(item => <ReactPlayer {...settings} url={`${URL}/watch?v=${item.key}`} />)}
// </MovieSlider>; */
}
