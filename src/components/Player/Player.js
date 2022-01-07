import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { fetchTrailer } from '../../services/movies-api';

export default function Player({ movieId }) {
  const URL = 'https://www.youtube.com';
  const [movie, setMovie] = useState([]);
  console.log(movie);

  const settings = {
    controls: true,
    // light: true,
    width: '100%',
    height: '100%',

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
    <>
      {movie.length >= 1 &&
        movie.map(item => (
          <ReactPlayer {...settings} key={item.key} url={`${URL}/embed/${item.key}`} />
        ))}
    </>
  );
}
