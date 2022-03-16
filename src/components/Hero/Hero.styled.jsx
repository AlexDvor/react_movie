import styled from '@emotion/styled';

export const Popular = styled.div``;

export const Wrapper = styled.div``;

export const BackgroundImage = styled.div`
  height: 400px; //750
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
  @media screen and (min-width: 768px) {
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

  /* .popularInfo button {
    height: 40px;
    width: 100px;
    font-size: 90%;
    margin-top: 0px;
  } */
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
`;

export const Rating = styled.p``;
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
  border-radius: 5px;
  background: white;
  color: black;
  cursor: pointer;
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
  background: ${props => {
    if (props.active) {
      return '#dfdddd';
    } else {
      return 'gray';
    }
  }};
`;
