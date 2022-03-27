import styled from '@emotion/styled';

const setBackground = props => {
  if (props.active) {
    return '#dfdddd';
  } else {
    return 'gray';
  }
};
export const Popular = styled.div``;
export const Wrapper = styled.div``;
export const BackgroundImage = styled.div`
  height: 500px; //750
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: ${props =>
    `linear-gradient(90deg, rgba(0, 0, 0, 0.8) 40%, rgba(0, 0, 0, 0) 60%), url("https://image.tmdb.org/t/p/original/${props.image}")`};
  color: white;
  z-index: 0;
  animation: 6s ease-in-out infinite alternate moving;
  @keyframes moving {
    0% {
      background-size: 300%;
      background-position: 60% 80%;
    }
    50% {
      background-size: 250%;
      background-position: 55% 55%;
    }
    100% {
      background-position: 60% 40%;
      background-size: 280%;
    }
  }

  @media screen and (min-width: 768px) {
    height: 750px;
  }

  @media screen and (min-width: 1280px) {
    @keyframes moving {
      0% {
        background-size: 180%; //300
        background-position: 60% 80%;
      }
      50% {
        background-size: 130%; //250
        background-position: 55% 55%;
      }
      100% {
        background-size: 150%; //280
        background-position: 60% 40%;
      }
    }
  }
`;
export const PopularInfo = styled.div`
  position: absolute;
  top: 20%;
  left: 6%;
  width: 40%;

  @media screen and (max-width: 768px) {
    text-align: center;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 90%;
  }
`;
export const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
`;
export const Rating = styled.p``;
export const Img = styled.img`
  width: 40px;
  height: 20px;
  margin-bottom: -5px;
`;
export const ReleaseDate = styled.p``;
export const HeaderOverview = styled.p`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const Button = styled.button`
  width: 150px;
  padding: 15px;
  font-size: 12px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  background: white;
  color: black;
  cursor: pointer;

  &:focus,
  &:hover {
    background-image: linear-gradient(to right top, #780000, #890409, #9c0810, #ae0d17, #c1121f);
    color: white;
  }
`;
export const SwitchImg = styled.div`
  display: none;
  position: absolute;
  top: 90%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const Item = styled.div`
  width: 50px;
  height: 5px;
  border-radius: 2px;
  display: inline-block;
  margin: 20px;
  cursor: pointer;
  background: ${setBackground};
`;
