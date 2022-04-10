import ReactPlayer from 'react-player/youtube';
import { useEffect, useState } from 'react';
import { fetchTrailer } from '../../services/movies-api';
import { useSelector } from 'react-redux';
import { getCurrentLanguages } from '../../redux/movies/movies-selectors';
//interface TS
import ITrailer from '../../interfaces/Trailer.interface';

type TMovieId = {
  movieId: number;
};

export default function Player({ movieId }: TMovieId) {
  const URL: string = 'https://www.youtube.com';
  const [movie, setMovie] = useState<ITrailer[]>([]);
  const currentLang = useSelector(getCurrentLanguages);

  const settings = {
    controls: true,
    // light: true,
    width: '100%',
    height: '100%',

    config: {
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
  };

  useEffect(() => {
    fetchTrailer(Number(movieId), currentLang.id).then(res => setMovie(res.results.slice(0, 1)));
  }, [movieId, currentLang]);

  return (
    <>
      {movie.length >= 1 &&
        movie.map(item => (
          <ReactPlayer {...settings} key={item.key} url={`${URL}/embed/${item.key}`} />
        ))}
    </>
  );
}
