import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { TrailerList, TrailerItem, Wrapper } from './Player.styled';
import { fetchTrailer } from '../../services/movies-api';
// import MovieSlider from '../Slider/Slider';

export default function Player({ movieId }) {
  const URL = 'https://www.youtube.com';
  const [movie, setMovie] = useState([]);
  console.log(movie);

  const settings = {
    controls: true,
    // light: true,
    width: '100%',
    height: '524px',

    config: {
      youtube: {
        playerVars: {
          showinfo: 0,
          enablejsapi: 1,
          autoplay: 1,
          controls: 1,
          autohide: 1,
          wmode: 'opaque',
          origin: 'http://localhost:3000',
        },
      },
    },
  };

  useEffect(() => {
    fetchTrailer(Number(movieId)).then(res => setMovie(res.results.slice(0, 1)));
  }, [movieId]);

  return (
    <TrailerList>
      {movie &&
        movie.map(item => (
          <TrailerItem key={item.key}>
            <ReactPlayer {...settings} url={`${URL}/embed/${item.key}`} />
          </TrailerItem>
        ))}
    </TrailerList>
  );
}
