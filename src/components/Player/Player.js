import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { PlayerWrapper } from './Player.styled';

import { fetchTrailer } from '../../services/movies-api';

export default function Player({ movieId }) {
  const URL = 'https://www.youtube.com';
  const [movie, setMovie] = useState([]);

  const settings = {
    controls: true,
    playing: false,
  };

  useEffect(() => {
    fetchTrailer(Number(movieId)).then(res => setMovie(res.results));
  }, [movieId]);

  return (
    <PlayerWrapper>
      {movie && movie.map(item => <ReactPlayer {...settings} url={`${URL}/watch?v=${item.key}`} />)}
    </PlayerWrapper>
  );
}
