import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchTrailer } from '../../services/movies-api';

export default function Player({ id }) {
  const URL = 'https://www.youtube.com';
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams('');

  const settings = {
    controls: true,
    playing: false,
  };

  useEffect(() => {
    fetchTrailer(438631).then(res => setMovie(res.results));
  }, []);

  return (
    <>
      {movie && movie.map(item => <ReactPlayer {...settings} url={`${URL}/watch?v=${item.key}`} />)}
    </>
  );
}
