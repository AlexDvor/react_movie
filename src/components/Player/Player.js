import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { TrailerList, TrailerItem } from './Player.styled';
import { fetchTrailer } from '../../services/movies-api';
// import MovieSlider from '../Slider/Slider';

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
    <TrailerList>
      {movie &&
        movie.map(item => (
          <TrailerItem key={item.key}>
            <ReactPlayer
              {...settings}
              config={{ youtube: { playerVars: { showinfo: 1 } } }}
              url={`${URL}/watch?v=${item.key}`}
            />
          </TrailerItem>
        ))}
    </TrailerList>
  );
}
