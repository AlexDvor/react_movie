import React, { Component } from 'react';
import Animate from 'react-smooth';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import imdb from '../../images/imdb-logo.png';
import {
  //   Popular,
  Wrapper,
  BackgroundImage,
  PopularInfo,
  Title,
  Rating,
  ReleaseDate,
  HeaderOverview,
  Button,
  SwitchImg,
  Item,
} from './Hero.styled';

// export default function Hero() {
//   const [showcaseMovies, setShowcaseMovies] = useState(3);
//   const [timeoutTime, setTimeoutTime] = useState(5000);
//   const [mounted, setMounted] = useState(false);
//   const [i, setI] = useState(0);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     setMounted(true);
//     const random = Math.floor(Math.random() * 100) + 1;
//     console.log(random);
//     fetch(
//       `https://api.themoviedb.org/3/trending/movie/day?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&include_adult=false&page=${random}`,
//     )
//       .then(res => res.json())
//       .then(data => {
//         if (mounted) setMovies(data.results);
//       })
//       .catch(err => console.log(err));
//     startTimeout();
//   }, [mounted, startTimeout]);

//   const startTimeout = () => {
//     this.timeout = setTimeout(() => {
//       if (i < showcaseMovies) setI(prevState => prevState + 1);
//       else setI(0);
//       startTimeout();
//     }, timeoutTime);
//   };

//   const divs = movies.length
//     ? movies.map((movie, index) => {
//         if (index <= showcaseMovies) {
//           return (
//             <Item
//               key={index}
//               active={i === index ? 'active' : null}
//               onClick={
//                 (() => setI(index),
//                 () => {
//                   clearTimeout(timeout);
//                   this.startTimeout();
//                 })
//               }
//             />
//           );
//         } else return null;
//       })
//     : null;

//   const moviesList = movies.length ? (
//     <Wrapper key={movies[i].id}>
//       <Animate to="1" from="0.2" attributeName="opacity">
//         <BackgroundImage
//           style={{
//             backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 60%), url("https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}")`,
//           }}
//         >
//           <PopularInfo>
//             <Title>{movies[i].title}</Title>
//             <Rating>
//               <em>
//                 <img
//                   src={imdb}
//                   alt="Rating"
//                   style={{ width: '40px', height: '20px', marginBottom: '-5px' }}
//                 />{' '}
//                 {movies[i].vote_average}
//               </em>
//             </Rating>
//             <ReleaseDate>
//               Release Date: {new Date(movies[i].release_date).toDateString()}
//             </ReleaseDate>
//             <HeaderOverview>{movies[i].overview}</HeaderOverview>
//             <Link to={'/' + movies[i].id}>
//               <Button>Thriler</Button>
//             </Link>
//           </PopularInfo>
//           <SwitchImg className="switchImg">{divs}</SwitchImg>
//         </BackgroundImage>
//       </Animate>
//     </Wrapper>
//   ) : (
//     <h4>Loading</h4>
//   );

//   return (
//     <>
//       <Popular>{moviesList}</Popular>
//     </>
//   );
// }

class Hero extends Component {
  constructor(props) {
    super(props);
    this.showcaseMovies = 3;
    this.timeoutTime = 5000;
    this.mounted = false;
  }
  state = {
    movies: [],
    i: 0,
  };

  componentDidMount() {
    this.mounted = true;
    this.random = Math.floor(Math.random() * 100) + 1;
    fetch(
      `https://api.themoviedb.org/3/trending/upcoming/day?api_key=17117ab9c18276d48d8634390c025df4&language=en-US&include_adult=false&page=${this.random}`,
    )
      .then(res => res.json())
      .then(data => {
        if (this.mounted) this.setState({ movies: data.results });
        // console.log('state movies ', this.state.movies);
      })
      .catch(err => console.log(err));
    this.startTimeout();
  }

  startTimeout = () => {
    this.timeout = setTimeout(() => {
      if (this.state.i < this.showcaseMovies) this.setState({ i: this.state.i + 1 });
      else this.setState({ i: 0 });
      this.startTimeout();
    }, this.timeoutTime);
  };

  componentWillUnmount() {
    this.mounted = false;
    clearTimeout(this.timeout);
  }

  render() {
    // const { movies, i, random } = this.state;
    const { movies, i } = this.state;

    const divs = movies.length
      ? movies.map((movie, index) => {
          if (index <= this.showcaseMovies) {
            return (
              <Item
                key={index}
                active={i === index ? 'active' : null}
                onClick={() =>
                  this.setState({ i: index }, () => {
                    clearTimeout(this.timeout);
                    this.startTimeout();
                  })
                }
              />
            );
          } else return null;
        })
      : null;

    const moviesList = movies.length ? (
      <Wrapper key={movies[i].id}>
        <Animate to="1" from="0.2" attributeName="opacity">
          <BackgroundImage
            style={{
              backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 60%), url("https://image.tmdb.org/t/p/original/${movies[i].backdrop_path}")`,
            }}
          >
            <PopularInfo>
              <Title>{movies[i].title}</Title>
              <Rating>
                <em>
                  <img
                    src={imdb}
                    alt="Rating"
                    style={{ width: '40px', height: '20px', marginBottom: '-5px' }}
                  />{' '}
                  {movies[i].vote_average}
                </em>
              </Rating>
              <ReleaseDate>
                Release Date: {new Date(movies[i].release_date).toDateString()}
              </ReleaseDate>
              <HeaderOverview>{movies[i].overview}</HeaderOverview>

              <Link to={{ pathname: `/movies/${movies[i].id}` }}>
                <Button>Thriler</Button>
              </Link>
              {/* <Link to={'/' + movies[i].id}>
                <Button>Thriler</Button>
              </Link> */}
            </PopularInfo>
            <SwitchImg className="switchImg">{divs}</SwitchImg>
          </BackgroundImage>
        </Animate>
      </Wrapper>
    ) : (
      <h4>Loading</h4>
    );

    return (
      <>
        <div className="popular">{moviesList}</div>
      </>
    );
  }
}
export default Hero;
